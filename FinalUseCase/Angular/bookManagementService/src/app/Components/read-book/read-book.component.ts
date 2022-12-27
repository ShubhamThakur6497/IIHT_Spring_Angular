import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.css']
})
export class ReadBookComponent implements OnInit {

  public book: any;
  public loggedInUser: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.book = data.bookContent;
    });
    const user: string = sessionStorage.getItem('loggedInUser') as string;
    this.loggedInUser = JSON.parse(user);
    console.log(this.book)
  }

}
