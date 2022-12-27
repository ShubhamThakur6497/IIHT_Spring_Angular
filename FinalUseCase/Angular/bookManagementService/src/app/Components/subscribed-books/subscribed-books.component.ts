import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscribed-books',
  templateUrl: './subscribed-books.component.html',
  styleUrls: ['./subscribed-books.component.css']
})
export class SubscribedBooksComponent implements OnInit {

  public loggedInUser: any;
  public books: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.books = data.subcriptionData;
    });
    this.books.forEach((book: any) => {
      book.subsriptionStatus=true;
    });
    const user: string = sessionStorage.getItem('loggedInUser') as string;
    this.loggedInUser = JSON.parse(user);
    console.log(this.books)
  }

}
