import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { CarAddComponent } from './car-add/car-add.component';
import { LogoutComponent } from './logout/logout.component';
import { NotesComponent } from './notes/notes.component';
import { AlertComponent } from './alert/alert.component';
import { ShareComponent } from './share/share.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NoteListComponent } from './note-list/note-list.component';
import { ServicesComponent } from './services/services.component';
import { FuelingsComponent } from './fuelings/fuelings.component';
import { FuelingListComponent } from './fueling-list/fueling-list.component';
import { FuelingAddComponent } from './fueling-add/fueling-add.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarDetailsComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CarAddComponent,
    LogoutComponent,
    NotesComponent,
    AlertComponent,
    ShareComponent,
    NoteAddComponent,
    NoteListComponent,
    ServicesComponent,
    FuelingsComponent,
    FuelingListComponent,
    FuelingAddComponent,
    ServiceAddComponent,
    ServiceListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
