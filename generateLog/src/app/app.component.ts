import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RetrjsnService } from './retrjsn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  conformaceResults: string[];
  title = 'Conformance Results';
  animalControl = new FormControl('', [Validators.required]);

  constructor(
    private retrjsnService: RetrjsnService;
  ) { }

  ngOnInit() {
    this.retrjsnService.getJSON().subscribe(data => {
      if (typeof Object.keys(data) !== 'undefined' && Object.keys(data).length > 0) {
        this.conformaceResults = Object.keys(data);
    }
    });
  }
}
