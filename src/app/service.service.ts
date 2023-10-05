import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private backendUrl = '//localhost:8080/api/services'

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.backendUrl, { withCredentials: true });
  }

  getServicesForCar(carId: number): Observable<Service[]> {
    return this.http.get<Service[]>(this.backendUrl + `?carId=${carId}`, { withCredentials: true });
  }

  getService(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }

  addService(note: Service): Observable<Service> {
    return this.http.post<Service>(this.backendUrl, note, { withCredentials: true });
  }

  deleteService(id: number): Observable<Service> {
    return this.http.delete<Service>(`${this.backendUrl}/${id}`, { withCredentials: true });
  }

}
