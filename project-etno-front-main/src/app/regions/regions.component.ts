import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ErrorHandlerService } from '../shared/services/error-handler.service';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../http.service';

import { map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [HttpService],
})
export class RegionsComponent {
  testRegionsRibbon = [
    {
      id: '1',
      reg: 'Республика Адыгея',
      searchName: 'Адыгея',
      previewPath: '/assets/adygea_preview.jpg',
    },
    {
      id: '2',
      reg: 'Краснодарский край',
      searchName: 'Краснодарский край',
      previewPath: '/assets/kr_krai_preview.jpg',
    },
  ];

  errorMessage : String ="";
  constructor(private httpService: HttpService, private errorHandler: ErrorHandlerService) {}
  testRegions = this.testRegionsRibbon;

  response: any;
  ROOT_URL = '';
  
  length: Number = 0;
  emptyRegion = [
    {
      id: "",
      subjectName: "",
      iconImage: ""
	  }
  ];
  isUndefined: Boolean = true;
  ngOnInit() {
    this.ROOT_URL = `http://localhost:8080/api/regions`;
    this.httpService
      .getData(this.ROOT_URL)
      .subscribe(regions => {
        if(regions == undefined){
          this.response = this.emptyRegion;
          this.isUndefined = true;
        }
        else{
          this.isUndefined = false;
          this.response = regions
        }
         
      }, 
      (error) => {
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      });

  }

  onSearchChange(event: any) {

    this.testRegions = this.testRegionsRibbon.filter(
      (t) =>
        t.reg
          .toLowerCase()
          .indexOf((event.target.value as string).toLowerCase()) > -1
    );
  }
}
