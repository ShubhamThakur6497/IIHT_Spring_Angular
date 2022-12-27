import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public showLoader: boolean = false 
  public userData: any = {
    password: '',
    email: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(userData: any) {
    this.showLoader = true;
    
    this.userService.login(userData).subscribe(
      (response: any) => {
        this.showLoader = false;
        this.userData = {
          password: '',
          email: ''
        };
        sessionStorage.setItem('loggedInUser', JSON.stringify(response));
        this.router.navigate(['book']);
      });
  }

}
