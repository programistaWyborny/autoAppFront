import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  username: string = "";

  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
  }

  share() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.shareCar(id, this.username)
      .subscribe(response => {
        this.router.navigateByUrl('/cars');
      }, error => {
        this.alertService.addAlert({ "content": "Operacja niedozwolona (Brak możliwości udostępnienia tego pojazdu)" });
      })
  }

}
