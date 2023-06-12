import { Component, NgModule } from "@angular/core";
import { HttpService } from "../http.service";
import { ErrorHandlerService } from '../shared/services/error-handler.service';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [HttpService]
})
export class RegistrationComponent{
    constructor(private httpService: HttpService, private errorHandler: ErrorHandlerService ){}

    firstname: string | undefined
    lastname: string | undefined
    middlename: string | undefined
    email: string | undefined
    phone: string | undefined
    region: string | undefined
    gender: string | undefined
    login: string | undefined
    password: string | undefined
 
    
    errorMessage : String ="";
    regions: any;
    genders: any;
    user: any;
    users: any;
    REGION_URL = `http://localhost:8080/api/regions`;
    GENDERS_URL = `http://localhost:8080/api/genders`;
    USER_URL = `http://localhost:8080/api/user`; 
    USERS_URL = `http://localhost:8080/api/users`; //посик по логину, почте и телефону
    REGISTRATION_URL = `http://localhost:8080/api/register`;

    ngOnInit() {
        this.httpService
            .getData(this.REGION_URL)
            .subscribe((regions) => (this.regions = regions), 
            (error) => {
              this.errorHandler.handleError(error);
              this.errorMessage = this.errorHandler.errorMessage;
            });
        this.httpService
            .getData(this.GENDERS_URL)
            .subscribe((genders) => (this.genders = genders), 
            (error) => {
              this.errorHandler.handleError(error);
              this.errorMessage = this.errorHandler.errorMessage;
            });
        // this.httpService
        //     .getData(this.USERS_URL)
        //     .subscribe((users) => (this.users = users));
    }
   

    public registration(){
        try {
            
            if(this.firstname == undefined || this.firstname == ""
            || this.lastname == undefined || this.lastname == ""
            || this.email == undefined || this.email == ""
            || this.phone == undefined || this.phone == ""
             || this.region == undefined || this.region == ""
            || this.gender == undefined || this.gender == ""
            || this.login == undefined || this.login == ""
            || this.password == undefined || this.password == ""){
                alert("Все обязательные поля должны быть заполнены");
            } 
            else if(this.password.length < 8){
                alert("Длина пароля не может быть меньше 8 символов");
            }
            else{
                if(this.users != undefined || this.users != null){
                    alert("Пользователь с такими логином, почтой или телефоном уже существует");
                }
                else{
                    const userBody = {
                        firstName: this.firstname, 
                        lastName: this.lastname,
                        middleName: this.middlename,
                        email: this.email,
                        phoneNumber: this.phone,
                        genderId: this.gender,
                        roleId: 1,
                        regionId: this.region,
                        login: this.login,
                        password: this.password,
                        accountTypeId: null,
                        restrictions: []
                    };
                    this.httpService.register(this.REGISTRATION_URL, userBody);
                    

                    
                }
                
            }
        } catch (error) {
            alert(error);
        }
   }

}
