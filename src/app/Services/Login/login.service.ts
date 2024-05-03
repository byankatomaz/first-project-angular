import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  con = "https://dummyjson.com/auth/login"

  login(username: string, password: string) {
    return this.http.post(this.con, {
      username: username,
      password: password
    }). pipe(
      map((val: any) => {
        return {
          username: val.username,
          firstName: val.firstName,
          lastName: val.lastName,
          email: val.email,
          gender: val.gender,
          image: val.image
        }
      })
    )
  }

}
