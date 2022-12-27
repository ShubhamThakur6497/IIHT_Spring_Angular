import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  public loggedInUser: any;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const user: string = sessionStorage.getItem('loggedInUser') as string;
    this.loggedInUser = JSON.parse(user);
    this.isUserLoggedIn = this.loggedInUser ? Object.keys(this.loggedInUser).length > 0 : false;
  }

  logout() {
    sessionStorage.removeItem('loggedInUser');
    window.location.reload();
    this.router.navigate(['book'])
    
   
  }

}
