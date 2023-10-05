import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private backendUrl = '//localhost:8080/api/notes'

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.backendUrl, { withCredentials: true });
  }

  getNotesForCar(carId: number): Observable<Note[]> {
    return this.http.get<Note[]>(this.backendUrl + `?carId=${carId}`, { withCredentials: true });
  }

  getNote(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.backendUrl, note, { withCredentials: true });
  }

  deleteNote(id: number): Observable<Note> {
    return this.http.delete<Note>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }

}
