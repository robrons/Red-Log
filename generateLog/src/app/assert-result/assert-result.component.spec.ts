
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertResultComponent } from './assert-result.component';

describe('AssertResultComponent', () => {
  let component: AssertResultComponent;
  let fixture: ComponentFixture<AssertResultComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssertResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
