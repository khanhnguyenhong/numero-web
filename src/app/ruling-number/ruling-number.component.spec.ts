import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulingNumberComponent } from './ruling-number.component';

describe('RulingNumberComponent', () => {
  let component: RulingNumberComponent;
  let fixture: ComponentFixture<RulingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulingNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
