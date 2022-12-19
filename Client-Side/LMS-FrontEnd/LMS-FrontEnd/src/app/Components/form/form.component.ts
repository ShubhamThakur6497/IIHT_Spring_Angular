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
    const observables = this.bookService.saveBook(this.book);
    observables.subscribe ( 
      (response:any) => {
        console.log(response);    
      }, function(error) {
        console.log(error);
        alert("something went wrong, Please try again!")
      })}
  constructor(private bookService : ServiceService) {}
  ngOnInit(): void {}
}