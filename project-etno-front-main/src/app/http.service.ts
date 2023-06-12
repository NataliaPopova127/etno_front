import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { Router } from '@angular/router';


@Injectable()
export class HttpService{

    errorMessage : String ="";
    response: any;
    constructor(private http: HttpClient, private errorHandler: ErrorHandlerService, private router: Router){ }
    
    getData(path:string){
        return this.http.get(path);
    }
    
    addData(path: string, body: any){
        return this.http.post(path, body);
    }  
    
    user: any;
    register(path: string, body: any){
        return this.http.post(path, body)
        .subscribe((user) => {
            this.user = user;
            if(this.user != undefined){
                // this.setAccessToken(this.user.accessToken);
                alert("Вы успешно зарегистрировались!");
            }
        }, 
        (error) => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
        });
    }
    authUser: any;
    ACCOUNT_URL = ``;
    account: any;
    auth(path: string, body: any){
        this.http.post(path, body)
        .subscribe((authUser) => {
            this.authUser = authUser
            if(this.authUser != null && this.authUser != undefined){
                this.setAccessToken(this.authUser.accessToken);
                this.ACCOUNT_URL = `http://localhost:8080/account/${this.authUser.idUser}`;
                var account = this.getData(this.ACCOUNT_URL).subscribe(
                    (account) => {
                        this.account = account
                        if(this.account != null && this.account != undefined){
                            var roleId = this.account.user.role.id
                            if(roleId == "2" || this.account.user.role.value == "Администратор тура"){
                                this.router.navigate(['/tourAdmin', this.authUser.idUser])
                            }
                            else if(roleId == "1" || this.account.user.role.value == "Пользователь"){
                                this.router.navigate(['/client-page', this.authUser.idUser]);
                            }
                        }
                    }, 
                    (error) => {
                      this.errorHandler.handleError(error);
                      this.errorMessage = this.errorHandler.errorMessage;
                    });
            }
        }, 
        (error) => {
            if(error.status == 403){
                alert("Неверные логин или пароль");
            }
            else{
                this.errorHandler.handleError(error);
                this.errorMessage = this.errorHandler.errorMessage;
            }
        });
        }
    getAccessToken(){
        return localStorage.getItem('accessToken');
    }
    setAccessToken(token: string){
        return localStorage.setItem('accessToken', token);
    }
}