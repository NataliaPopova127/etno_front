import { Component, NgModule } from "@angular/core";
import { HttpService } from "../http.service";
import { RegistrationComponent } from "../registration/registration.component";
import { AppRoutingModule } from "../app-routing.module";

import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from "@angular/material/dialog";

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.css'],
    providers: [HttpService]
})
export class AuthorizationComponent {

    constructor(private httpService: HttpService, public dialog: MatDialog) {}

    message: string = "";

    login: any | undefined;
    password: any | undefined;
    response: any;
    USER_URL = '';

    ngOnInit() {
        
    }

    public authorization(){
        this.USER_URL = `http://localhost:8080/api/authenticate`;
        var body = {
            "login": this.login,
            "password": this.password
        };
        this.httpService.auth(this.USER_URL, body);
        
        //переход на страг=ницу тур админа
       // document.location.href = "tourAdmin";
        // if(this.response != undefined){
        //     //переход на страг=ницу тур админа
        //     document.location.href = "tourAdmin";
        // }
        // else{
        //     this.message = "Неверный логин или пароль";
        //     this.openDialog();
        // }
       
    }

    openDialog(){
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '250px',
            data: {message: this.message}
          });
    }
}