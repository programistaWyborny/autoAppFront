import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Location } from '@angular/common';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { FuelingService } from '../fueling.service';
import { Fueling } from '../fueling';
import { ServiceService } from '../service.service';
import { Service } from '../service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car: Car | undefined;
  confirmationNeeded: boolean = false;
  notes: Note[] = [];
  fuelings: Fueling[] = [];
  services: Service[] = [];

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService,
    private fuelingService: FuelingService,
    private serviceService: ServiceService
  ) { }

  ngOnInit(): void {
    const carId = Number(this.route.snapshot.paramMap.get('id'));
    this.getCar(carId);
    this.getNotesForCar(carId);
    this.getFuelingsForCar(carId);
    this.getServicesForCar(carId);
  }

  getCar(id: number) {
    return this.carService.getCar(id).subscribe(car => this.car = car);
  }

  getNotesForCar(id: number) {
    return this.noteService.getNotesForCar(id).subscribe(notes => this.notes = notes);
  }

  getFuelingsForCar(id: number) {
    return this.fuelingService.getFuelingsForCar(id).subscribe(fuelings => this.fuelings = fuelings);
  }

  getServicesForCar(id: number) {
    return this.serviceService.getServicesForCar(id).subscribe(services => this.services = services);
  }

  startRemoving() {
    this.confirmationNeeded = true;
  }

  cancel() {
    this.confirmationNeeded = false;
  }

  removeCar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.carService.removeCar(id).subscribe(() => {
      this.car = undefined;
      this.confirmationNeeded = false;
      this.router.navigateByUrl("/cars")
    }
    );
  }

  shareCar() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigateByUrl(`/cars/${id}/share`)
  }

  addNote() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigateByUrl(`/cars/${id}/addNote`)
  }

  addFueling() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigateByUrl(`/cars/${id}/addFueling`)
  }

  addService() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigateByUrl(`/cars/${id}/addService`)
  }

}
