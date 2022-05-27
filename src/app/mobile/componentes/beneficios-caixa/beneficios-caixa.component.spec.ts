import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiosCaixaComponent } from './beneficios-caixa.component';

describe('BeneficiosCaixaComponent', () => {
  let component: BeneficiosCaixaComponent;
  let fixture: ComponentFixture<BeneficiosCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiosCaixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiosCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
