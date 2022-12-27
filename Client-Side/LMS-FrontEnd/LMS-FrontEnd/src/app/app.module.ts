import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormComponent } from './Components/form/form.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';



import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';


import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FormComponent,
    DisplayBooksComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
 
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
