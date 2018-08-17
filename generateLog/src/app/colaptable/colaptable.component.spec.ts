import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaptableComponent } from './colaptable.component';

describe('ColaptableComponent', () => {
  let component: ColaptableComponent;
  let fixture: ComponentFixture<ColaptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColaptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColaptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
