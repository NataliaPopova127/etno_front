import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ErrorHandlerService } from '../shared/services/error-handler.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
  providers: [HttpService]
})
export class TourComponent {
  tourInfo = { id: '', name : '' };
  errorMessage : String ="";
  constructor( private route: ActivatedRoute, private httpService: HttpService, private errorHandler: ErrorHandlerService ) {
    this.tourInfo.id = this.route.snapshot.paramMap.get('id') as string;
    this.tourInfo.name = this.route.snapshot.paramMap.get('name') as string;
   // alert(this.tourInfo.name);
  }

  tour: any;
  id = '0';
  name = '';
  TOUR_URL = ``;

  ngOnInit() {
    this.id = this.tourInfo.id;
    // this.TOUR_URL = `http://localhost:8080/tour/${this.tourInfo.name}`;    
    // console.log(this.TOUR_URL.replace(/\s/g,''));
    // //console.log(this.TOUR_URL);

    this.TOUR_URL = `http://localhost:8080/api/tour/${this.tourInfo.id}`;   
    this.httpService
        .getData(this.TOUR_URL)
        .subscribe((tour) => {
          (this.tour = tour)
        }, 
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
}
}
