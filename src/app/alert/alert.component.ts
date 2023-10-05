import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(public alertService: AlertService) {
   }

  ngOnInit(): void {
  }

  hasAlerts(): boolean {
    return this.alertService.alerts.length > 0;
  }

  clearAlert(): void {
    this.alertService.clear();
  }

}
