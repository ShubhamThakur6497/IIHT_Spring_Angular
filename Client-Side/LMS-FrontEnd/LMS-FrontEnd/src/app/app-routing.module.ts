import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FormComponent } from './Components/form/form.component';
import { DisplayBooksComponent } from './Components/display-books/display-books.component';


const routes: Routes = [{path:"",component:HomeComponent},{path:"addBook",component:FormComponent},
{path:"displayBooks",component:DisplayBooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
