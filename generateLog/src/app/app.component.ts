import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RetrjsnService } from './retrjsn.service';


export interface Animal {
  name: string;
  sound: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Conformance Results';
  animalControl = new FormControl('', [Validators.required]);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  constructor(
    private retrjsnService : RetrjsnService;
) { }

  ngOnInit() {
    this.retrjsnService.getJSON().subscribe(data => {
      console.log(data);
  });  }
}
