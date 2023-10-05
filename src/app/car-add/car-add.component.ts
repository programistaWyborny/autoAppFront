import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  car: Car = {} as Car;

  constructor(
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCar(): void {
    this.carService.addCar(this.car)
      .subscribe(response => this.router.navigateByUrl("/cars"));
  }

}
