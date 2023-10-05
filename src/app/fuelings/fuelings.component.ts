import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fueling } from '../fueling';
import { FuelingService } from '../fueling.service';

@Component({
  selector: 'app-fuelings',
  templateUrl: './fuelings.component.html',
  styleUrls: ['./fuelings.component.css']
})
export class FuelingsComponent implements OnInit {

  fuelings: Fueling[] = [];

  constructor(
    private fuelingService: FuelingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getFuelings();
  }

  getFuelings(): void {
    this.fuelingService.getFuelings()
      .subscribe(fuelingsList => this.fuelings = fuelingsList);
  }

  addFueling(): void {
    this.router.navigateByUrl("addFueling");
  }

}
