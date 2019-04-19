import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCommandeListeComponent } from './total-commande-liste.component';

describe('TotalCommandeListeComponent', () => {
  let component: TotalCommandeListeComponent;
  let fixture: ComponentFixture<TotalCommandeListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalCommandeListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCommandeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
