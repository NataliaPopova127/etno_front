import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YandexMapsComponent } from './yandex-maps/yandex-maps.component';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionComponent } from './region/region.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule }   from '@angular/common/http';
import { AuthorizationComponent } from './authorization/authorization.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const mapConfig:  YaConfig = {
  apikey: '6db495ad-3e21-4030-a956-74245743feac',
  lang: 'ru_RU'
}

@NgModule({
  declarations: [
    AppComponent,
    YandexMapsComponent,
    HomeComponent,
    TourComponent,
    RegionsComponent,
    RegionComponent,
    FooterComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
