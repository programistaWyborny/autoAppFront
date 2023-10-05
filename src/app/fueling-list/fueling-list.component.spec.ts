import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelingListComponent } from './fueling-list.component';

describe('FuelingListComponent', () => {
  let component: FuelingListComponent;
  let fixture: ComponentFixture<FuelingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
