import { Component, OnInit } from '@angular/core';
import Book from 'src/app/Entity/book';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  book: Book = new Book();
  save() {
    if (this.book.author != "" || this.book.bookName != "" || this.book.genre != "" ) {
      const observables = this.bookService.saveBook(this.book);
      observables.subscribe(
        (response: any) => {
          console.log(response);
          this.book.bookName="";
          this.book.author="";
          this.book.genre="";
          this.book.price=0;
          
        }, function (error) {
          console.log(error);
          alert("something went wrong, Please try again!")
        })
    }
    else {
      alert("Please check if data is filled")
    }
  }
  constructor(private bookService: ServiceService) { }
  ngOnInit(): void { }
}