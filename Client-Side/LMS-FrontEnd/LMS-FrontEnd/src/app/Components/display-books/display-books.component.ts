import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import Book from 'src/app/Entity/book';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {

  books : Book[] = [];

  constructor(private service:ServiceService) { }

  deleteRow(book , index){
    const observables= this.service.deleteBook(book);
    observables.subscribe((response:any) => {
      console.log(response);
      this.books.splice(index,1);
    })
  }

  ngOnInit(): void {
    const promise = this.service.getBooks();
    promise.subscribe((response) => {
      console.log(response);
      this.books = response as Book[];

    })
  }

  // delete(bookid){
  //     this.service.deleteBook(bookid).subscribe((response) => {
  //       console.log(response);
  //       this.books = this.books.filter((ele:any) => ele.id != bookid );
  //       console.log(this.books);

  //     })
  //}

}
