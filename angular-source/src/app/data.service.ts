import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

     constructor(private http: Http) { }

     getDataFromDb() {
          return this.http.get('https://api.mlab.com/api/1/databases/mydatabase/collections/polls?apiKey=lXutACAwSvbZ_lgydrHKTyJA4duiL-iH')
               .map(function (res) {
                    return res.json();
               })

     }
     getDataFromMongoDB(){
         return this.http.get('http://localhost:3000/category')
         .map(res=> res.json(), err=> alert(err));
         
     }
     

}
