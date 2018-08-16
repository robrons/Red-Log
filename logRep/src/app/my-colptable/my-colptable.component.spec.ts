import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColptableComponent } from './my-colptable.component';

describe('MyColptableComponent', () => {
  let component: MyColptableComponent;
  let fixture: ComponentFixture<MyColptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyColptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyColptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
