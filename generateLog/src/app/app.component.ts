import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { RetrjsnService } from './retrjsn.service';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  conformaceResults: string[];
  conformanceData: undefined;
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
  }

  onSubmit(data: string) {
    if (typeof this.conformanceData[data] !== 'undefined') {
    this.transferService.setData(this.conformanceData[data]);
    console.log('Set Data');
    }
  }
}
