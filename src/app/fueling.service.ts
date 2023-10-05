import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fueling } from './fueling';

@Injectable({
  providedIn: 'root'
})
export class FuelingService {

  private backendUrl = '//localhost:8080/api/fuelings'

  constructor(private http: HttpClient) { }

  getFuelings(): Observable<Fueling[]> {
    return this.http.get<Fueling[]>(this.backendUrl, { withCredentials: true });
  }

  getFuelingsForCar(carId: number): Observable<Fueling[]> {
    return this.http.get<Fueling[]>(this.backendUrl + `?carId=${carId}`, { withCredentials: true });
  }

  getFueling(id: number): Observable<Fueling> {
    return this.http.get<Fueling>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }

  addFueling(fueling: Fueling): Observable<Fueling> {
    return this.http.post<Fueling>(this.backendUrl, fueling, { withCredentials: true });
  }

  deleteFueling(id: number): Observable<Fueling> {
    return this.http.delete<Fueling>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }

}
