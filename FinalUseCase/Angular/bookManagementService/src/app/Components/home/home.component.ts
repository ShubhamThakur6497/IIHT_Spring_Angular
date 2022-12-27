import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: any = [];
  public loggedInUser: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.books = data.booksData;
    });
    const user: string = sessionStorage.getItem('loggedInUser') as string;
    this.loggedInUser = JSON.parse(user);
    console.log(this.books)
  }

}
