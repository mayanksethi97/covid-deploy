import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

 myData:any[];
  constructor(private http: HttpClient) { }

  getData(): Observable< any[]>{
  let tempData = this.http.get<any[]>('http://dummy.restapiexample.com/api/v1/employees');
  return tempData;
}
}

