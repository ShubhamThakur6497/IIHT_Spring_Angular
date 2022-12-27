import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: any;
  public isUserLoggedIn: boolean = true;
  public showLoader: boolean = false;
  public showMessageBanner: boolean = false;
  public loggedInUser: any;

  constructor(
    private router: Router,
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    const user: string = sessionStorage.getItem('loggedInUser') as string;
    this.loggedInUser = JSON.parse(user);
    this.isUserLoggedIn = this.loggedInUser ? Object.keys(this.loggedInUser).length > 0 : false;
    if (this.loggedInUser) {
      let bookSubsription: any;
      this.booksService.getSubscriptionList(this.loggedInUser && this.loggedInUser.userId).subscribe((res: any) => {
        bookSubsription = res;
        let bookSubsriptionObj: any = {};
        bookSubsription.forEach((book: any) => {
          bookSubsriptionObj[book.id] = book;
        });
        console.log(bookSubsription)
        console.log(bookSubsriptionObj)
        if (bookSubsription && bookSubsription.length) {
          this.books.forEach((book: any) => {
            if (bookSubsriptionObj[book.id]) {
              book.subsriptionStatus = true;
            }
          });
        }
      });

    }
  }

  public editBook(book: any) {
    if (!(this.loggedInUser && this.loggedInUser.accessLevel === 'author')) return;
    this.showLoader = true;
    this.router.navigate(['book/edit', book.id], { state: { book } });
    this.booksService.editBook(book).subscribe((res) => {
      this.showLoader = false;
      this.displayMessageBanner();
    });
  }
  public getBookContent(book: any) {
    if (!(this.loggedInUser )) return;
    this.showLoader = true;
    this.router.navigate(['book/read/', book.id], { state: { book } });
    this.booksService.getBookContent(book.id).subscribe((res) => {
      this.showLoader = false;
     // this.displayMessageBanner();
    });
  }

  public updateBookStatus(book: any) {
    if (!(this.loggedInUser && this.loggedInUser.accessLevel === 'author')) return;
    this.showLoader = true;
    this.booksService.updateBookStatus(book).subscribe((res: any) => {
      book.status = res.status;
      this.showLoader = false;
      this.displayMessageBanner();
    });
  }

  public async updateSubsription(book: any) {
    if (!(this.loggedInUser && this.loggedInUser.accessLevel === 'reader')) return;
    this.showLoader = true;
    try {
      await this.booksService.updateSubsription(book, this.loggedInUser.userId, book.subsriptionStatus).toPromise();
      this.showLoader = false;

      book.subsriptionStatus = !book.subsriptionStatus;
    } catch (error) {
      this.showLoader = false;
      console.log(error);
    }
    // this.booksService.updateSubsription(book, this.loggedInUser.userId, book.subsriptionStatus).subscribe((res) => {
    //  // this.showLoader = false;
    //   this.displayMessageBanner();
    //   book.subsriptionStatus=!book.subsriptionStatus;
    // });

  }

  public displayMessageBanner() {
    this.showMessageBanner = true;
    setTimeout(() => {
      this.showMessageBanner = false;
    }, 10000);
  }

  public getDate(date: Date) {
    const today = Date.now();
    const timeDiff = (today - new Date(date).getTime());
    const days = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return (days ? `${days} days ago` : 'today');
  }

}
