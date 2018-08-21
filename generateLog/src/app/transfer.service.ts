import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AssertResult } from './assert-table/assert-table.component';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  dataChange: BehaviorSubject<AssertResult[]> = new BehaviorSubject<AssertResult[]>([]);

  setData(data) {
    this.dataChange.next(data);
  }

  get data(): AssertResult[] {
    return this.dataChange.value;
  }

  constructor() {
  }
}
