import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() notes: Note[] = [];
  @Input() showCarId: boolean = true;

  constructor(private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removeNote(noteId: number) {
    this.noteService.deleteNote(noteId)
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
