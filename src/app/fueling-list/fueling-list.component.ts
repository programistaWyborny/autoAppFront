import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fueling } from '../fueling';
import { FuelingService } from '../fueling.service';

@Component({
  selector: 'app-fueling-list',
  templateUrl: './fueling-list.component.html',
  styleUrls: ['./fueling-list.component.css']
})
export class FuelingListComponent implements OnInit {

  @Input() fuelings: Fueling[] = [];
  @Input() showCarId: boolean = true;

  constructor(private fuelingService: FuelingService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removeFueling(fuelingId: number) {
    this.fuelingService.deleteFueling(fuelingId)
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
