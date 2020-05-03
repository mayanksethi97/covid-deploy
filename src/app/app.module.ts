import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { Covid19Component } from './covid19/covid19.component';
import { CheckComponent } from './check/check.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ShowgraphComponent } from './showgraph/showgraph.component';
import { HomeComponent } from './home/home.component';
import { CommonlayoutComponent } from './commonlayout/commonlayout.component';
import {routing} from '../app.routing';
import { FormsModule } from '@angular/forms';
import { StatewiseComponent } from './statewise/statewise.component';
import { ResourceComponent } from './resource/resource.component';
@NgModule({
  declarations: [
    AppComponent,

    Covid19Component,

    CheckComponent,

    ViewproductsComponent,

    ShowgraphComponent,

    HomeComponent,

    CommonlayoutComponent,

    StatewiseComponent,

    ResourceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
