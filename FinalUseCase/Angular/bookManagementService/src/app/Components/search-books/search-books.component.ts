import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  public bookToSearch: any = {
    bookName: '',
    category: '',
    author: '',
    creationDate: undefined
  };
  public showLoader: any = false;
  searchedBooks: any;
  isSearch: boolean = true;

  constructor(
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
  }

  searchBooks() {
    console.log(this.bookToSearch);
    this.showLoader = true;
    this.searchedBooks = [];
    this.booksService.getBookDetails(this.bookToSearch).subscribe((res) => {
      this.showLoader = false;
      this.isSearch = false;
      console.log(res)
      this.searchedBooks=res;

     

    });
  }
}
