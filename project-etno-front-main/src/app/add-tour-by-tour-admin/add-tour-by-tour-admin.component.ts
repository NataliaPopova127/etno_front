import { Component } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
    selector: 'app-addTour',
    templateUrl: './add-tour-by-tour-admin.component.html',
    styleUrls: ['./add-tour-by-tour-admin.component.css'],
    providers: [HttpService]
})
export class AddTourByTourAdminComponent{ 
    constructor(private httpService: HttpService){}
    name: string | undefined;
    description: string | undefined;
    dateStart: Date | undefined;
    dateEnd: Date | undefined;
    photoPath: string | undefined;
    videoPath: string | undefined;
    type: string | undefined;
    region: string | undefined;

    regions: any;
    types:any | undefined;
    REGIONS_URL = `http://localhost:8080/regions`;
    TYPES_URL = `http://localhost:8080/types`;

    ngOnInit() {
        this.httpService
            .getData(this.REGIONS_URL)
            .subscribe((regions) => (this.regions = regions));
        this.httpService
        .getData(this.TYPES_URL)
        .subscribe((types) => (this.types = types));
    }
    public tourList(){
        document.location.href = "tourAdmin";
    } 
}