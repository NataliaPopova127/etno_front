import { Component, NgModule } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [HttpService]
})
export class RegistrationComponent{
    constructor(private httpService: HttpService){}
    genders = [
        {id: 1, name: "Женский"},
        {id: 2, name: "Мужской"}
    ];
    // regions = [
    //     {id: 1, name: "Адыгея"},
    //     {id: 2, name: "Краснодарский край"}
    // ]
    firstname: string | undefined
    lastname: string | undefined
    middlename: string | undefined
    email: string | undefined
    phone: string | undefined
    region: string | undefined
    gender: string | undefined
    login: string | undefined
    password: string | undefined

    regions: any;
    user: any;
    users: any;
    REGION_URL = `http://localhost:8080/regions`;
    USER_URL = `http://localhost:8080/user`;
    USERS_URL = `http://localhost:8080/users`; //посик по логину, почте и телефону

    ngOnInit() {
        this.httpService
            .getData(this.REGION_URL)
            .subscribe((regions) => (this.regions = regions));
        this.httpService
            .getData(this.USERS_URL)
            .subscribe((users) => (this.users = users));
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
                        firstname: this.firstname, 
                        lastname: this.lastname,
                        middlename: this.middlename,
                        email: this.email,
                        phone: this.phone,
                        regionId: this.region,
                        genderId: this.gender,
                        login: this.login,
                        password: this.password
                    };
                    this.httpService.addData(this.USER_URL, userBody).subscribe((user) => (this.user = user));
                }
            }
        } catch (error) {
            alert(error);
        }
   }

}
