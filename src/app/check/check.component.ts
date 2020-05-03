import { Component, OnInit } from '@angular/core';
import {CheckService} from './check.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {


   names:number[] = new Array(1,2,3,4,5);
   testData:any[];
   check1:any[];
   x:any;
  constructor(private check:CheckService,private http : HttpClient) { }

  ngOnInit() {
    let obs=this.http.get('https://api.covid19india.org/data.json');
    obs.subscribe((response)=>console.log(response));
    console.log(this.testData);



  }




}