import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  repeatedPassword: string = "";

  constructor(private userService: UserService, private alertService: AlertService) { 
   }

  ngOnInit(): void {
  }

  register() {
    if (this.password == this.repeatedPassword) {
      this.userService.register(this.username, this.password);  
    }
    else {
      this.alertService.addAlert({ "content": "Niepoprawne Haslo (Podane hasla sie roznia)" });
    }
  }

}
