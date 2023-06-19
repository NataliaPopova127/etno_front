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

import { HTTP_INTERCEPTORS, HttpClientModule }   from '@angular/common/http';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import { TourAdminComponent } from './tourAdmin/tourAdmin.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTourByTourAdminComponent } from './add-tour-by-tour-admin/add-tour-by-tour-admin.component';

import { MaterialModule } from './material.module';
import { ModalComponent } from './modal/modal.component';
import { TokenInterceptor } from './tokenInterceptor';
import { ClientPageComponent } from './client-page/client-page.component';
import { Error403PageComponent } from './error403-page/error403-page.component';

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
    AuthorizationComponent,
    RegistrationComponent,
    TourAdminComponent,
    AddTourByTourAdminComponent,
    ModalComponent,
    ClientPageComponent,
    Error403PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
