import { Component, OnInit } from '@angular/core';
import {Covid19Service} from './covid19.service'
import { data } from 'src/interfaces/data';
import {Chart} from 'chart.js';
import { Injectable } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class Covid19Component implements OnInit {

  myData:any[];
  errMsg:string;
  chart:Chart;
   confirmed:any[];
  last:any;

  todayConfirmed:any;
  todaydeceased:any;
  todayrecovered:any;
  totalConfirmed:any;
  totaldeceased:any;
  totalrecovered:any;
  date:any;

  constructor(private _covid : Covid19Service) {}

  ngOnInit() {

    console.log('ts works');
    this._covid.getData().subscribe(
      responseData=>{



        this.myData=responseData;
        this.last=(responseData['cases_time_series'].length);
        console.log(this.last);


        this.todayConfirmed=(responseData['cases_time_series'][(this.last)-1].dailyconfirmed);


        this.todaydeceased=(responseData['cases_time_series'][this.last-1].dailydeceased);

        this.todayrecovered=(responseData['cases_time_series'][this.last-1].dailyrecovered);

        this.totalConfirmed=(responseData['cases_time_series'][this.last-1].totalconfirmed);

        this.totaldeceased=(responseData['cases_time_series'][this.last-1].totaldeceased);

        this.totalrecovered=(responseData['cases_time_series'][this.last-1].totalrecovered);

        this.date=(responseData['cases_time_series'][this.last-1].date);
      },
      errorRes=>{
        this.errMsg=errorRes;
      }
    );


    }



  }