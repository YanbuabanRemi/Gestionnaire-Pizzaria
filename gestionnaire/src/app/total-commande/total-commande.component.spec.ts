import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCommandeComponent } from './total-commande.component';

describe('TotalCommandeComponent', () => {
  let component: TotalCommandeComponent;
  let fixture: ComponentFixture<TotalCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
