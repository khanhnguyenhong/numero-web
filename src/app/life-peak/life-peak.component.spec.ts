import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePeakComponent } from './life-peak.component';

describe('LifePeakComponent', () => {
  let component: LifePeakComponent;
  let fixture: ComponentFixture<LifePeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifePeakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
