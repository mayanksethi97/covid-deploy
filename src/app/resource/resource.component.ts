import { Component, OnInit } from '@angular/core';
import { Covid19Component } from '../covid19/covid19.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { Covid19Service } from '../covid19/covid19.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  resourceData:any[];
  ArrVar:any[];
  stateData:any[]=new Array();
  selectedState:any;
  selectedStateArr:any[]=new Array();
  categoryArr:any[]=['CoVID-19 Testing Lab','Fundraisers','Free Food','Hospitals and Centers','Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]','Police','Government Helpline']

  stateArr:any[]=new Array();
  selectedCategory:any;
  categoryData:any[];
  flag:boolean=false;
  noData:boolean=false;

  constructor(private _covid:Covid19Service,private router:Router) { }

  ngOnInit() {
    let i;
    this._covid.getResourceData().subscribe(
    success=>{
      this.resourceData=success;
      this.ArrVar=this.resourceData['resources'];

    console.log(this.ArrVar[0]['state']);




    }

    );


    this._covid.getStateWiseData().subscribe(

      success=>{

        for(let obj in success)
        {
          this.stateData.push(obj);
        }

        for(let i=0;i<this.stateData.length;i++)
        {
          console.log(this.stateData[i]);
        }
      }
    );

  }

  onSelect(state)
  {
    this.selectedState=state;
    this.stateArr=new Array();
    console.log(state);
    let i;
     for(i=0;i<this.ArrVar.length;i++)
      {

          if(this.ArrVar[i]['state']==this.selectedState)
         {
           this.stateArr.push(this.ArrVar[i])
           console.log(this.ArrVar[i]);

         }
      }

      console.log(this.stateArr);
      console.log("check above");
  }

  onSelectCategory(category)
  {

    this.noData=false;
    this.flag=true;
    this.selectedCategory=category;
    this.categoryData=new Array();
    console.log(this.selectedCategory);
    let i;
    for(i=0;i<this.stateArr.length;i++)
      {

          if(this.stateArr[i]['category']==this.selectedCategory)
         {
           this.categoryData.push(this.stateArr[i])


         }

      }
      console.log(this.categoryData.length);
      if(this.categoryData.length==0)
      {
        console.log("inside");
        this.noData=true;
      }
  }
}
