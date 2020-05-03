import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { data } from 'src/interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  myData:data[];
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
  let tempData = this.http.get<any[]>(' https://api.covid19india.org/data.json');

  return tempData;
}

  getStateWiseData() : Observable<any[]>
  {
    let stateData=this.http.get<any[]>('https://api.covid19india.org/state_district_wise.json');
    return stateData;
  }

  getResourceData():Observable<any[]>
  {
    let resource=this.http.get<any[]>('https://api.covid19india.org/resources/resources.json');
    return resource;
  }

}
