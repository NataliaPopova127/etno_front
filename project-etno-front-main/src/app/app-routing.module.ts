import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './region/region.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tour', component: TourComponent },
  { path: 'region', component: RegionComponent },
  { path: 'regions', component: RegionsComponent },
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
