import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePizzaComponent } from './liste-pizza.component';

describe('ListePizzaComponent', () => {
  let component: ListePizzaComponent;
  let fixture: ComponentFixture<ListePizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
