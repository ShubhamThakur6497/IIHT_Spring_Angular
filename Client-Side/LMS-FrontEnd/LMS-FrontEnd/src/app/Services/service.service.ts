import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const addBook_URL="http://localhost:5000/add";
const getBooks_URL="http://localhost:5000/getall";
const deleteBooks_URL="http://localhost:5000/del";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  saveBook(book :{
    bookName: String;
    author: String;
    price: number;
    genre: String ;
    status: Boolean;
  }){
    return this.http.post(addBook_URL,book);
  }

  getBooks(){
    return this.http.get(getBooks_URL);
  }

  deleteBook(book : any){
     return this.http.delete(deleteBooks_URL + "/" + book.id);
   }

  

  constructor(private http: HttpClient) { }
}
