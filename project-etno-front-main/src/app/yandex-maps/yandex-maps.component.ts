import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YaEvent, YaReadyEvent } from 'angular8-yandex-maps';
import { HttpService } from '../http.service';

interface GeoObjectConstructor {
  feature: ymaps.IGeoObjectFeature;
  options: ymaps.IGeoObjectOptions;
}

interface PlacemarkConstructor {
  geometry: number[];
  properties: ymaps.IPlacemarkProperties;
  options: ymaps.IPlacemarkOptions;
}

@Component({
  selector: 'app-yandex-maps',
  templateUrl: './yandex-maps.component.html',
  styleUrls: ['./yandex-maps.component.css'],
  providers: [HttpService],
})
export class YandexMapsComponent {
  placemarkproperies: ymaps.IPlacemarkProperties[] = [{
    balloonContentHeader: 'The placemark balloon',
    balloonContentBody: 'Content of the <em>placemark</em> balloon',
    balloonContentFooter: 'Basement',
    hintContent: 'The placemark hint',
  }];

  map!: ymaps.Map;

  @Input()
  regionName: string = ""

  @Input()
  showRegion: boolean = true

  @Input()
  tourId: string = ""

  placemarks: PlacemarkConstructor[] = [];
  tours: any;
  tour: any;
  ROOT_URL = ``;
  TOUR_URL = ``;

  globalRouter: Router

  constructor(private router: Router,private httpService: HttpService) {
    this.globalRouter = router
  }

  ngOnInit() {
    this.ROOT_URL = `http://localhost:8080/api/tours`;
    
    this.httpService
      .getData(this.ROOT_URL)
      .subscribe((tours) => (this.tours = tours));
  }

  onMapReady(event: YaReadyEvent<ymaps.Map>): void {
    this.map = event.target;

    ymaps.geolocation
      .get({
        provider: 'yandex',
        mapStateAutoApply: true,
      })
      .then(
        (result) => {

          result.geoObjects.options.set('preset', 'islands#redCircleIcon');
          result.geoObjects.get(0).properties.set({
            balloonContentBody: 'Ваше местоположение',
          });
          //this.map.geoObjects.add(result.geoObjects);

          this.drawRegion(result, this.regionName)
        },
        (err) => {
          ymaps.geolocation
            .get({
              provider: 'browser',
              mapStateAutoApply: true,
            })
            .then((result) => {
              result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
              //this.map.geoObjects.add(result.geoObjects);

              this.drawRegion(result)
            });
        });
        
        if (this.tourId != "") {
          //get info about tour
          for(let index = 0; index < this.tours.length; index++){
            const element = this.tours[index];
            this.placemarks.push({
              geometry: [element.geometry.lat, element.geometry.lon],
              properties:{
                iconCaption: element.name,
              },
              options:{
                preset: 'islands#redDotIconWithCaption',
                data: element.id,
              }
            });
          }
          this.map.setZoom(16)
          this.map.panTo([44.609662434952035, 40.13996062879765], { flying: true })

        }
  }


  onBaloonClick(event: YaEvent) {
    
    this.TOUR_URL = `http://localhost:8080/api/tour/${event.target.options._options.data}`;
    this.httpService
      .getData(this.TOUR_URL)
      .subscribe((t) => (this.tour = t, this.globalRouter.navigate(['/tour', this.tour.id, this.tour.name])));

    //this.globalRouter.navigate(['/tour'], event.target.options._options.data)
    
  }

  drawRegion(result: { geoObjects: ymaps.GeoObjectCollection }, customLocation: string = "") {
    if (this.showRegion) {
      var location: string =
        customLocation == "" ? result.geoObjects.get(0)
          .properties.get('metaDataProperty')
          .GeocoderMetaData.AddressDetails
          .Country.AdministrativeArea.AdministrativeAreaName
          : customLocation

      var region = ymaps.geoQuery(ymaps.regions.load("RU", {
        lang: "ru",
        quality: 2
      })).setOptions('fillColor', 'rgba(0, 0, 255, 0.1)')
        .each((e: any) => {
          if (e.properties._data.name.indexOf(location) > -1 ||
            location.indexOf(e.properties._data.name) > -1) {
            new ymaps.GeoQueryResult(e).addToMap(this.map)

            this.map.setBounds(e.geometry._bounds)
          }
        })
    }
  }
}
