import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAppComponent } from './super-app.component';

describe('SuperAppComponent', () => {
  let component: SuperAppComponent;
  let fixture: ComponentFixture<SuperAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
