import { Injectable } from '@angular/core';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  
  alerts: Alert[] = [];
  
  constructor() { }

  addAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  clear() {
    this.alerts = [];
  }

}
