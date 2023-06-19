import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './region/region.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { TourAdminComponent } from './tourAdmin/tourAdmin.component';
import { AddTourByTourAdminComponent } from './add-tour-by-tour-admin/add-tour-by-tour-admin.component';
import { PagenotfoundComponent } from  './pagenotfound/pagenotfound.component';
import { InternalseverComponent } from './internalsever/internalsever.component'
import { ClientPageComponent } from './client-page/client-page.component';
import { Error403PageComponent } from './error403-page/error403-page.component';
import { OtherErrorComponent } from './other-error/other-error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tour/:id/:name', component: TourComponent },
  { path: 'region/:id/:subjectName', component: RegionComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'tourAdmin/:idUser', component: TourAdminComponent },
  { path: 'add-tour-by-tour-admin', component: AddTourByTourAdminComponent },
  { path: 'client-page/:id', component: ClientPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '404', pathMatch: 'full', component: PagenotfoundComponent},
  { path: '403', pathMatch: 'full', component: Error403PageComponent},
  { path: '500', component: InternalseverComponent },
  { path: 'other-error', component: OtherErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
