import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColaptableComponent } from './colaptable/colaptable.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatExpansionModule, MatToolbarModule, MatButtonModule, MatCardModule,
   MatGridListModule, MatListModule, MatTreeModule} from '@angular/material';
import { UpperviewComponent } from './upperview/upperview.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaptableComponent,
    UpperviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTreeModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
