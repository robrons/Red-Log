
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssertionTableComponent } from './assertion-table.component';

describe('AssertionTableComponent', () => {
  let component: AssertionTableComponent;
  let fixture: ComponentFixture<AssertionTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AssertionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssertionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
