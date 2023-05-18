import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../http.service';

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

  constructor(private httpService: HttpService) {}
  testRegions = this.testRegionsRibbon;

  response: any;
  ROOT_URL = '';

  ngOnInit() {
    this.ROOT_URL = `http://localhost:8080/regions`;
    this.httpService
      .getData(this.ROOT_URL)
      .subscribe((response) => (this.response = response));
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
