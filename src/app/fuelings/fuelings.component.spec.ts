import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelingsComponent } from './fuelings.component';

describe('FuelingsComponent', () => {
  let component: FuelingsComponent;
  let fixture: ComponentFixture<FuelingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
