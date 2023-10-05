import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private backendUrl = 'http://localhost:8080/api'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(username: string, password: string) {
    this.http.post<void>(
      this.backendUrl + "/register",
      { "username": username, "password": password }
    )
      .subscribe(response => {
        this.router.navigateByUrl('/login');
      }
      );
  }
}
