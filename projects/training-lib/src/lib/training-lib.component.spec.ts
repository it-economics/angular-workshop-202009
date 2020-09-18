import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingLibComponent } from './training-lib.component';

describe('TrainingLibComponent', () => {
  let component: TrainingLibComponent;
  let fixture: ComponentFixture<TrainingLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
