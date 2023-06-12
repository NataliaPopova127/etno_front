import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { ErrorHandlerService } from '../shared/services/error-handler.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [HttpService]
})
export class HomeComponent {

	errorMessage : String ="";
	constructor(private httpService: HttpService, private errorHandler: ErrorHandlerService) {}
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
  
	ngOnInit() {
	  this.ROOT_URL = `http://localhost:8080/api/regions`;
	  this.httpService
		.getData(this.ROOT_URL)
		.subscribe((response) => {
			(this.response = response)
		}, 
		(error) => {
		  this.errorHandler.handleError(error);
		  this.errorMessage = this.errorHandler.errorMessage;
		});

	  if(this.response == undefined){
      	this.response = this.emptyRegion;
		this.length = 0;
		console.log();
      }
	  else{
		this.length = this.response.length;
	  }
	}
}
