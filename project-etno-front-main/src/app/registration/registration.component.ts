import { Component } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [HttpService]
})
export class RegistrationComponent{
    gendersList = [
        {id: 1, name: "Женский"},
        {id: 2, name: "Мужской"}
    ]
    genders = this.gendersList
   gender: any | undefined
}
