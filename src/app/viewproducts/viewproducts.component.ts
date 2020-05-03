import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  showDivMsg:boolean=false;
  products:any[];
  constructor() { }

  ngOnInit() {

    this.products = [
      { "ProductId": "P101", "ProductName": "Lamborghini Gallardo Spyder", "CategoryId": 1, "Price": 18000000, "QuantityAvailable": 10 },
      { "ProductId": "P102", "ProductName": "Ben Sherman Mens Necktie Silk Tie", "CategoryId": 2, "Price": 1847, "QuantityAvailable": 20 },
      { "ProductId": "P103", "ProductName": "BMW Z4", "CategoryId": 1, "Price": 6890000, "QuantityAvailable": 10 },
      { "ProductId": "P104", "ProductName": "Samsung Galaxy S4", "CategoryId": 3, "Price": 38800, "QuantityAvailable": 100 }
    ]
    if(this.products==null)
    {
      this.showDivMsg=true;
    }
  }

}
