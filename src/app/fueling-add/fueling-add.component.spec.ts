import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelingAddComponent } from './fueling-add.component';

describe('FuelingAddComponent', () => {
  let component: FuelingAddComponent;
  let fixture: ComponentFixture<FuelingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
