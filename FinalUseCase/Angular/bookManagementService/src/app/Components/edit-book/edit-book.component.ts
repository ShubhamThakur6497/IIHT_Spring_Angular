import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  public showLoader: boolean = false;
  public loggedInUser: any;
  public bookId: any;
  public bookToEdit: any;

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user: string = sessionStorage.getItem('loggedInUser') as string;
    this.loggedInUser = JSON.parse(user);
    this.route.params.subscribe((params: any) => {
      this.bookId = params.bookId;
    });
    this.bookToEdit = window.history.state.book;
  }

  
  public editBook() {
    if (!(this.loggedInUser && this.loggedInUser.accessLevel === 'author')) return;
    this.showLoader = true;
    this.booksService.editBook(this.bookToEdit).subscribe((res) => {
      this.showLoader = false;
      this.router.navigate(['./../book']);
    });
  }

}
