import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values:any;
  flag:boolean = false;

  showList(){
    this.flag = !this.flag;
  }

  myArray = [
    {
      id:1,
      name:'SomeName'
    },
    {
      id:2,
      name:'SomeOtherName'
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues(){
    this.http.get('http://localhost:5000/api/values').subscribe(response =>{
      this.values = response;
    }, error => {
      console.log(error);
    })
  }
}
