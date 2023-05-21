import { Component, NgModule } from "@angular/core";
import { HttpService } from "../http.service";
import { RegistrationComponent } from "../registration/registration.component";
import { AppRoutingModule } from "../app-routing.module";

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
    providers: [HttpService]
})
export class AuthorizationComponent {

    login: any | undefined;
    password: any | undefined;

    public authorization(){
       //переход на страг=ницу тур админа
       document.location.href = "tourAdmin";
    }
}