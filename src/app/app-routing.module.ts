import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NoteAddComponent } from './note-add/note-add.component';
import { NotesComponent } from './notes/notes.component';
import { FuelingsComponent } from './fuelings/fuelings.component';
import { FuelingAddComponent } from './fueling-add/fueling-add.component';
import { ServicesComponent } from './services/services.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { RegisterComponent } from './register/register.component';
import { ShareComponent } from './share/share.component';

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'cars/:id/share', component: ShareComponent },
  { path: 'addCar', component: CarAddComponent },
  { path: 'addNote', component: NoteAddComponent },
  { path: 'cars/:id/addNote', component: NoteAddComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'fuelings', component: FuelingsComponent },
  { path: 'addFueling', component: FuelingAddComponent },
  { path: 'cars/:id/addFueling', component: FuelingAddComponent },
  { path: 'fuelings', component: FuelingsComponent },
  { path: 'addFueling', component: FuelingAddComponent },
  { path: 'cars/:id/addFueling', component: FuelingAddComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'addService', component: ServiceAddComponent },
  { path: 'cars/:id/addService', component: ServiceAddComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
