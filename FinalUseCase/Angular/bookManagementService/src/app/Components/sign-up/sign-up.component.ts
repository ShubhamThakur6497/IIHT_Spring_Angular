import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public userData: any = {
    username: '',
    password: '',
    accessLevel: '',
    email: ''
  };
  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  signUp(userData: any) {
    console.log(userData)
    alert("User signed up");
    this.userService.signUp(this.userData).subscribe(
        (response: any) => {
        this.userData.username = "";
        this.userData.password = "";
        this.userData.accessLevel = "";
        this.userData.email = "";
        this.route.navigate(['signIn'])
      });
  }
}
