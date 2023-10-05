import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {

  note: Note = {} as Note;
  relatedCarId: String | null = "";
  cars: Car[] = [];

  constructor(
    private noteService: NoteService,
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.relatedCarId = this.route.snapshot.paramMap.get('id');
    if (this.relatedCarId === null) {
      this.carService.getCars().subscribe(c => this.cars = c);
    } else {
      this.note.carId = Number(this.relatedCarId);
    }
  }

  addNote(): void {
    this.noteService.addNote(this.note)
      .subscribe(response => {
        this.router.navigateByUrl('/notes');
      }, error => {
        this.alertService.addAlert({ "content": "Błąd! Proszę wypełnić wszystkie pola" });
      })
  }

}
