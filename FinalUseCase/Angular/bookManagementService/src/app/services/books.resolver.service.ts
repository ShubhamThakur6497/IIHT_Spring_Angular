import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class BooksResolverService implements Resolve<any> {

  constructor(
    private booksService: BooksService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.booksService.getBooksList();
  }

}
