import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatExpansionModule, MatToolbarModule, MatButtonModule, MatCardModule,
   MatGridListModule, MatListModule, MatTreeModule, MatTableModule, MatInputModule,
   MatPaginatorModule, MatSelectModule, MatSortModule, MatTabsModule, MatCheckboxModule, MatFormFieldModule} from '@angular/material';
import { UpperviewComponent } from './upperview/upperview.component';
import { AssertTableComponent } from './assert-table/assert-table.component';
import { ChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UpperviewComponent,
    AssertTableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatTreeModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule,
    MatSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot({post: simpleReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
