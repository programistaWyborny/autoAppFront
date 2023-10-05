import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Service } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  service: Service = {} as Service;
  relatedCarId: String | null = "";
  cars: Car[] = [];

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.relatedCarId = this.route.snapshot.paramMap.get('id');
    if (this.relatedCarId === null) {
      this.carService.getCars().subscribe(c => this.cars = c);
    } else {
      this.service.carId = Number(this.relatedCarId);
    }
  }

  addService(): void {
    this.serviceService.addService(this.service)
      .subscribe(response => this.router.navigateByUrl("/services"));
  }

}
