import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperviewComponent } from './upperview.component';

describe('UpperviewComponent', () => {
  let component: UpperviewComponent;
  let fixture: ComponentFixture<UpperviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
