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
        this.userInfo.id = this.route.snapshot.paramMap.get('id') as string;
        //alert(this.regionInfo.id); Данные из пути заносятся в переменные в regionInfo, оттуда брать id и вставлять в путь к апи для поиска инфы по региону
      }
    firstname: string | undefined;
    user: any;
    id = "";
    USER_URL = '';

    ngOnInit() {
        this.id = this.userInfo.id;
        this.USER_URL = `http://localhost:8080/user/${this.id}`;
        this.httpService
            .getData(this.USER_URL)
            .subscribe((user) => (this.user = user));

        if(this.user != null || this.user != undefined){
            //загрузка списка туров админа
        }
    } 
    public addTour(){
        document.location.href = "addTourByTourAdmin";
    }  
}