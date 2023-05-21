import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './region/region.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { TourAdminComponent } from './tourAdmin/tourAdmin.component';
import { AddTourByTourAdminComponent } from './addTourByTourAdmin/addTour.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tour', component: TourComponent },
  { path: 'region', component: RegionComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'tourAdmin', component: TourAdminComponent },
  { path: 'addTourByTourAdmin', component: AddTourByTourAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
