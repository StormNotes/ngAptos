import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensasComponent } from './expensas.component';

describe('ExpensasComponent', () => {
  let component: ExpensasComponent;
  let fixture: ComponentFixture<ExpensasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
