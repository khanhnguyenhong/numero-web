import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyAiComponent } from './dummy-ai.component';

describe('DummyAiComponent', () => {
  let component: DummyAiComponent;
  let fixture: ComponentFixture<DummyAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyAiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
