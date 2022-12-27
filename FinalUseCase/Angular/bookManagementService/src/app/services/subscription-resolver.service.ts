import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { BooksService } from './books.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionResolverService {

  constructor(
    private booksService: BooksService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.booksService.getSubscriptionList(route.params['userId']);
  }
}
