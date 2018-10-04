import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetrjsnService {

  constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
    });
   }

  public getJSON(): Observable<any> {
    return this.http.get('../AssertionLogs.json');
  }
  
  public getVersion(): Observable<any> {
    return this.http.get('../Version.json');
  }
}
