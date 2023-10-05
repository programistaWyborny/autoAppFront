import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private backendUrl = '//localhost:8080/api/cars'
  private shareUrl = '//localhost:8080/api/share'

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.backendUrl, { withCredentials: true });
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.backendUrl, car, { withCredentials: true });
  }
  
  removeCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }  

  shareCar(id: number, username: string): Observable<void> {
    return this.http.post<void>(`${this.shareUrl}`, {"carId" : id, "sharedWithUsername" : username}, { withCredentials: true });
  }

}
