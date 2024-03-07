import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSelectComponent } from './pizza-select.component';

describe('PizzaSelectComponent', () => {
  let component: PizzaSelectComponent;
  let fixture: ComponentFixture<PizzaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
