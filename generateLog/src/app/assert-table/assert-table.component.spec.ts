import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertTableComponent } from './assert-table.component';

describe('AssertTableComponent', () => {
  let component: AssertTableComponent;
  let fixture: ComponentFixture<AssertTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssertTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
