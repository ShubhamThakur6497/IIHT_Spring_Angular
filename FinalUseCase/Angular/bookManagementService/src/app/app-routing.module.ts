import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { EditBookComponent } from './Components/edit-book/edit-book.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SubscribedBooksComponent } from './Components/subscribed-books/subscribed-books.component';
import { BooksResolverService } from './services/books.resolver.service';
import { SubscriptionResolverService } from './services/subscription-resolver.service';
import { ReadBookComponent } from './Components/read-book/read-book.component';
import { BookcontentresolverService } from './services/bookcontentresolver.service';

const routes: Routes = [
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: '', redirectTo: "book", pathMatch: "full" },
  { path: 'book', component: HomeComponent, resolve: { booksData: BooksResolverService } },
  { path: 'book/search', component: SearchBooksComponent },
  { path: 'book/add', component: AddBookComponent },
  { path: 'book/edit/:bookId', component: EditBookComponent },
  { path: 'book/read/:bookId', component: ReadBookComponent ,resolve: { bookContent: BookcontentresolverService}},
  { path: 'book/subscribed/:userId', component: SubscribedBooksComponent, resolve: { subcriptionData: SubscriptionResolverService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
