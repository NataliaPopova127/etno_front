import { Component } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute } from "@angular/router";
import { toInteger } from "@ng-bootstrap/ng-bootstrap/util/util";

@Component({
    selector: 'app-tourAdmin',
    templateUrl: './tourAdmin.component.html',
    styleUrls: ['./tourAdmin.component.css'],
    providers: [HttpService]
})
export class TourAdminComponent{
    userInfo = { id: '' };
    constructor(private route: ActivatedRoute, private httpService: HttpService) {
        this.userInfo.id = this.route.snapshot.paramMap.get('idUser') as string;
        //alert(this.regionInfo.id); Данные из пути заносятся в переменные в regionInfo, оттуда брать id и вставлять в путь к апи для поиска инфы по региону
      }
    firstname: string | undefined;
    account: any;
    tours:any;
    idUser = "";
    USER_URL = '';
    TOUR_URL = '';

    emptyTours=[
        {
            id: "",
            name: "",
            description: ""
        }
    ]

    ngOnInit() {
        this.USER_URL = `http://localhost:8080/account/${this.userInfo.id}`;
        this.httpService
            .getData(this.USER_URL)
            .subscribe(user => {
                this.account = user;
                if(this.account != null && this.account != undefined){
                    this.firstname = this.account.user.firstName
                }
            });
       // if(this.user != null || this.user != undefined){
        //загрузка списка туров админа
        this.TOUR_URL = `http://localhost:8080/api/tours`;
        this.httpService
            .getData(this.TOUR_URL)
            .subscribe((tours) => (this.tours = tours));
        
        if(this.tours == undefined){
            this.tours = this.emptyTours;
        }
      //  }
    } 
    public addTour(){
        document.location.href = "add-tour-by-tour-admin";
    }  
}