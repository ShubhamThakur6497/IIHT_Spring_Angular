import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule } from "ngx-loading";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { FooterComponent } from './Components/footer/footer.component';
import { EditBookComponent } from './Components/edit-book/edit-book.component';
import { BookformComponent } from './Components/bookform/bookform.component';
import { SubscribedBooksComponent } from './Components/subscribed-books/subscribed-books.component';
import { ReadBookComponent } from './Components/read-book/read-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchBooksComponent,
    BookListComponent,
    AddBookComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    EditBookComponent,
    BookformComponent,
    SubscribedBooksComponent,
    ReadBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
