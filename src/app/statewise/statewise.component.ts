import { Component, OnInit } from '@angular/core';
import {Covid19Service} from '../../../src/app/covid19/covid19.service';
import { NgForm } from '@angular/forms';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent implements OnInit {


  stateData:any[];
  stateArr:any[]=new Array();
  selectedState:any;
  selectedDistrict:any;
  distArr:any[]=new Array();
  active:any;
  confirmed:any;
  deceased:any;
  recovered:any;
  flag:boolean=false;
  chart:Chart;
  chartFlag:boolean=false;

  constructor(private _covid : Covid19Service) { }

  ngOnInit() {

    this._covid.getStateWiseData().subscribe(

      success=>{

        this.stateData=success;
        console.log(this.stateData);
        let check=(this.stateData['Delhi']);
        console.log(check['districtData']['New Delhi']['active']);
        for(let obj in success)
        {
          this.stateArr.push(obj);
        }

        for(let i=0;i<this.stateArr.length;i++)
        {
          console.log(this.stateArr[i]);
        }
      }
    );


  }

  onSelect(state)
  {
    this.distArr=new Array();
    this.selectedState=state;
    let dist;
    dist=this.stateData[state]['districtData'];
    console.log(dist);
    for(let dis in dist)
        {
          this.distArr.push(dis);
        }

        console.log(this.distArr);
  }

  onSelectDist(dist1)
  {

    console.log(dist1);
    let distr;
    this.selectedDistrict=dist1;
    distr=this.stateData[this.selectedState]['districtData'];
    this.active=distr[dist1].active;
    this.deceased=distr[dist1].deceased;
    this.recovered=distr[dist1].recovered;
    this.confirmed=distr[dist1].confirmed;
    this.flag=true;
    this.chartFlag=true;
    console.log(this.active);






                  this.chart=new Chart('canvas',{
          type:'bar',
          data:{
            labels: ['active', 'deaths', 'recovered'],
            datasets:[
              {
                data:[this.active],
                borderColor:'#a86932',
                barPercentage: 1.0,
                label:'infected',
                pointHoverBackgroundColor:"blue",
                 backgroundColor:"black"

              },
              {
                data:[this.deceased],
                borderColor:'#f23838',
                barPercentage: 1.0,
                label:'death',
                backgroundColor:"red"
              },
              {
                data:[this.recovered],
                borderColor:'#36e04a',
                barPercentage: 1.0,
                label:'recovered',
                backgroundColor:"green"
              }

            ]
          },
          borderWidth: 1,
          options:{

             barValueSpacing:5,
            legend:{
              display:false
            },

            scales:{
              xAxes:[{
                display:false



              }],
              yAxes:[{
                ticks: {
                    beginAtZero: true
                }


              }]
            }

          }

        })




  }

}
