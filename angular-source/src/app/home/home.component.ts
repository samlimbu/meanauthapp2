import { Component, OnInit } from '@angular/core';
import{DataService} from'../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  DATA;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getCategory()
  }
  getCategory(){
      this.dataService.getDataFromMongoDB()
      .subscribe(
          data=> this.DATA = data,
          err=>console.log(err),
          ()=> console.log('Fetched data from mongodb')
      )
      
  }
 

}
