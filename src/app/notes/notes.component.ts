import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notesList => this.notes = notesList);
  }

  addNote(): void {
    this.router.navigateByUrl("addNote");
  }

}
