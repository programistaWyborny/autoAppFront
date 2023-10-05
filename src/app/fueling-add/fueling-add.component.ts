import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Fueling } from '../fueling';
import { FuelingService } from '../fueling.service';

@Component({
  selector: 'app-fueling-add',
  templateUrl: './fueling-add.component.html',
  styleUrls: ['./fueling-add.component.css']
})
export class FuelingAddComponent implements OnInit {

  fueling: Fueling = {} as Fueling;
  relatedCarId: String | null = "";
  cars: Car[] = [];

  constructor(
    private fuelingService: FuelingService,
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit(): void {
    this.relatedCarId = this.route.snapshot.paramMap.get('id');
    if (this.relatedCarId === null) {
      this.carService.getCars().subscribe(c => this.cars = c);
    } else {
      this.fueling.carId = Number(this.relatedCarId);
    }
  }

  addFueling(): void {
    this.fuelingService.addFueling(this.fueling)
      .subscribe(response => this.router.navigateByUrl("/fuelings"));
  }

}
