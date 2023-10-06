import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunarYearRelationComponent } from './lunar-year-relation.component';

describe('LunarYearRelationComponent', () => {
  let component: LunarYearRelationComponent;
  let fixture: ComponentFixture<LunarYearRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunarYearRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunarYearRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
