import { Component, OnInit } from '@angular/core';
import { Covid19Component } from '../covid19/covid19.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Covid19Service } from '../covid19/covid19.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed:any;
  todayConfirmed:any;
  totaldeath:any;
  totalrecovered:any;
  myData:any[];
  last:any;
  errMsg:any;

  constructor(private covid1:Covid19Component,private router:Router,private _covid:Covid19Service) {

   }

  ngOnInit() {

    this._covid.getData().subscribe(
      responseData=>{



        this.myData=responseData;
        this.last=(responseData['cases_time_series'].length);
        console.log(this.last);


        this.todayConfirmed=(responseData['cases_time_series'][(this.last)-1].dailyconfirmed);

        this.totalConfirmed=(responseData['cases_time_series'][this.last-1].totalconfirmed);

        this.totaldeath=(responseData['cases_time_series'][this.last-1].totaldeceased);

        this.totalrecovered=(responseData['cases_time_series'][this.last-1].totalrecovered);
        console.log(this.todayConfirmed);
        console.log(this.totalConfirmed);
        console.log(this.totaldeath);
        console.log(this.totalrecovered);


      },
      errorRes=>{
        this.errMsg=errorRes;
      }
    );
    console.log('this is a test');
  }

  renderView()
  {
    console.log("working");
    this.router.navigate(['/viewData']);
  }

  renderStateView()
  {
    this.router.navigate(['/state']);
  }

  renderResourceView()
  {
    this.router.navigate(['/resource']);
  }
}
