import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './app/home/home.component';
import { hostElement } from '@angular/core/src/render3/instructions';
import { Covid19Component } from './app/covid19/covid19.component';
import { StatewiseComponent } from './app/statewise/statewise.component';
import { ResourceComponent } from './app/resource/resource.component';

const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},

    {path:'viewData',component:Covid19Component},
    {path:'state',component:StatewiseComponent},
    {path:'resource',component:ResourceComponent},
    {path:'**',component:HomeComponent}


];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);