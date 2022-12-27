import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './../config/app.settings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public signUp(user: {
    username: String;
    password: String;
    accessLevel: String;
    email: String;

  }) {
    return this.http.post(`${config.userAPIURL}/signup`, user);
  }

  public login(user: {
    password: String,
    email: String
  }) {
    return this.http.post(`${config.userAPIURL}/signin`, user);
  }

}
