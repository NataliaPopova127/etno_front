import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getData(path:string){
        return this.http.get(path)
    }
    addData(path: string, body: any){
        return this.http.post(path, body);
    }
}