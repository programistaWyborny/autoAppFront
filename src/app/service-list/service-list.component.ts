import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  @Input() services: Service[] = [];
  @Input() showCarId: boolean = true;

  constructor(private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removeService(serviceId: number) {
    this.serviceService.deleteService(serviceId)
      .subscribe(() => {
        this.reloadCurrentRoute();
      });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }



}
