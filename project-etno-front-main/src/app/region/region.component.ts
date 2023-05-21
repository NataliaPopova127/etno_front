import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgbCarousel,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
  providers: [HttpService],
})
export class RegionComponent {
  regionInfo = { id: '' };

  isCarouselLoaded = false;
  images = [62, 83, 466, 965, 982, 1043, 738].map(
    (n) => `https://picsum.photos/id/${n}/900/500`
  );

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.regionInfo.id = this.route.snapshot.paramMap.get('id') as string;
    //alert(this.regionInfo.id); Данные из пути заносятся в переменные в regionInfo, оттуда брать id и вставлять в путь к апи для поиска инфы по региону
  }

  response: any;
  id = '0';

  ROOT_URL = '';

  ngOnInit() {
    this.id = this.regionInfo.id;
    this.ROOT_URL = `http://localhost:8080/region/${this.id}`;
    this.httpService
      .getData(this.ROOT_URL)
      .subscribe((response) => (this.response = response));
  }

  ngOnDestroy() {}

  onImageLoad() {
    this.isCarouselLoaded = true;
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (
      this.unpauseOnArrow &&
      slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT ||
        slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
    ) {
      this.togglePaused();
    }
    if (
      this.pauseOnIndicator &&
      !slideEvent.paused &&
      slideEvent.source === NgbSlideEventSource.INDICATOR
    ) {
      this.togglePaused();
    }
  }
}
