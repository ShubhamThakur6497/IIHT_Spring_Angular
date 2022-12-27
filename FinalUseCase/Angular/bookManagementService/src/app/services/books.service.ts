import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './../config/app.settings';
import { Observable } from 'rxjs';

const saveBook_URL="";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  public getBooksList() {
    const user: string = sessionStorage.getItem('loggedInUser') as string;
    const loggedInUser: any = JSON.parse(user);;
    let url = `${config.booksAPIURL}/getUserBooks`;
    if ( loggedInUser && loggedInUser.accessLevel == 'author') url = `${config.booksAPIURL}/getUserBooksAdmin`;
    return this.http.get(url);
  }

  public getBookDetails(book: any) {
    return this.http.post(`${config.booksAPIURL}/getBook`, book);
  }

  public saveBook(book :{
    bookName: String;
    author: String;
    price: number;
    category: String;
    status: Boolean;
    content: String;
    publisher: String;

  }){
    return this.http.post(`${config.booksAPIURL}/saveBook`, book);
  }

  public editBook(book: any) {
    return this.http.put(`${config.booksAPIURL}/editBook/${book.id}`, book);
  }

  public getBookContent(bookId: any) {
    return this.http.get(`${config.booksAPIURL}/readBook/${bookId}`);
  }

  public updateBookStatus(book: any) {
    return this.http.put(`${config.booksAPIURL}/updateStatus/${book.id}`, {});
  }

  public updateSubsription(book: any ,userId: any, subsciptionStatus: boolean) {
  
    let url= `${config.booksAPIURL}/subBook`;
    if(subsciptionStatus)  url= `${config.booksAPIURL}/delSub`;
    return this.http.post(url, {bookId : book.id, userId});
  }

  public getSubscriptionList(userId: any) {
    return this.http.get(`${config.booksAPIURL}/getUserBooksById/${userId}`);
  }

}
