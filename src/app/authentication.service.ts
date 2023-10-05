import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private backendUrl = '//localhost:8080/api'
  private userLoggedIn = false;
  authenticatedUser = "";

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) { }

  authenticate(username: string, password: string) {
    var authorization = 'Basic ' + btoa(username + ':' + password);
    this.http.get<void>(
      this.backendUrl + "/login",
      { headers: new HttpHeaders({ 'X-Requested-With': 'XMLHttpRequest', 'Authorization': authorization }), withCredentials: true }
    )
      .subscribe(response => {
        this.userLoggedIn = true;
        this.authenticatedUser = username;
        this.router.navigateByUrl('/cars');
      }, error => {
        this.userLoggedIn = false;
        this.alertService.addAlert({ "content": error.message });
      }
      );
  }

  isUserLoggedIn(): boolean {
    return this.userLoggedIn;
  }

  logOut() {
    this.http.post<void>(this.backendUrl + "/logout", {}, { withCredentials: true })
      .subscribe(r => {
        this.userLoggedIn = false;
        this.router.navigateByUrl('/login');
      });
  }

}
