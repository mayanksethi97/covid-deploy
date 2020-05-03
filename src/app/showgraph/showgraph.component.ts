import { Component, OnInit } from '@angular/core';
import { Covid19Component } from '../covid19/covid19.component';
import { Covid19Service } from '../covid19/covid19.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-showgraph',
  templateUrl: './showgraph.component.html',
  styleUrls: ['./showgraph.component.css']
})
export class ShowgraphComponent  implements OnInit  {

deceased:any;
recovered:any;
infected:any;
chart:Chart;
date1:any;
recoveredArr:any;
infectedArr:any;
deathArr:any;
myData:any[];
  constructor(private _covid : Covid19Service) {
  }

  ngOnInit() {


    this._covid.getData().subscribe(
responseData=>{

   let graphrecovered=responseData['cases_time_series'].map(responseData=>responseData.dailyrecovered);

        let graphdeath=responseData['cases_time_series'].map(responseData=>responseData.dailydeceased);

        let graphinfected=responseData['cases_time_series'].map(responseData=>responseData.dailyconfirmed);

        let graphdate=responseData['cases_time_series'].map(responseData=>responseData.date);

        console.log(graphrecovered,graphdeath,graphinfected,graphdate);

              this.chart=new Chart('canvas',{
          type:'line',
          data:{
            labels:graphdate,
            datasets:[
              {
                data:graphinfected,
                borderColor:'#a86932',
                fill:false,
                label:'infected',
                pointHoverBackgroundColor:"blue"

              },
              {
                data:graphdeath,
                borderColor:'#f23838',
                fill:false,
                label:'death'
              },
              {
                data:graphrecovered,
                borderColor:'#36e04a',
                fill:false,
                label:'recovered'
              }

            ]
          },
          options:{
            legend:{
              display:false
            },

            scales:{
              xAxes:[{
                display:true,

              }],
              yAxes:[{
                display:true
              }]
            }

          }

        })

}

    );



  }

}
