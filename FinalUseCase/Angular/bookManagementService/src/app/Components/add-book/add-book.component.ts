import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public bookToAdd: any = {
    bookName: '',
    category: '',
    author: '',
    price: undefined,
    publisher: '',
    published_date: undefined,
    content: ''
  }; 



  ngOnInit(): void {
  }

  addBook() {
  console.log(this.bookToAdd)
  this.bookService.saveBook(this.bookToAdd).subscribe(
        (response: any) => {
          this.bookToAdd.bookName="";
          this.bookToAdd.author="";
          this.bookToAdd.category="";
          this.bookToAdd.price= undefined;
          this.bookToAdd.publisher = '';
          this.bookToAdd.published_date = undefined;
          
        }, function (error) {
          console.log(error);
          alert("Book added");
          
        })
  }

  constructor(private bookService: BooksService) { }

}
