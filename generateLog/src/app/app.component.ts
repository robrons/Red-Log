import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { RetrjsnService } from './retrjsn.service';
import { TransferService } from './transfer.service';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { AnyFn } from '@ngrx/store/src/selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  conformaceResults: string[];
  conformanceData: any;
  versionInfo: any;
  title = 'Conformance Results';
  animalControl = new FormControl('', [Validators.required]);
  result: string;
  constructor(
    private retrjsnService: RetrjsnService,
    private transferService: TransferService
  ) { }

  ngOnInit() {
    this.retrjsnService.getJSON().subscribe(data => {
      if (typeof Object.keys(data) !== 'undefined' && Object.keys(data).length > 0) {
        this.conformaceResults = Object.keys(data);
        this.conformanceData = data;
    }
    });

    this.retrjsnService.getVersion().subscribe(data => {
      if (typeof Object.keys(data) !== 'undefined' && Object.keys(data).length > 0) {
        this.versionInfo = data;
    }
    });
  }

  onSubmit(data: string) {
    console.log(data);
    if (typeof this.conformanceData[data] !== 'undefined') {
    this.transferService.setData(this.conformanceData[data]);
    }
    if (typeof this.conformanceData[data] !== 'undefined') {
    this.transferService.setVersion(this.versionInfo);
    }
  }
}
