import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalityGridComponent } from './penality-grid.component';

describe('PenalityGridComponent', () => {
  let component: PenalityGridComponent;
  let fixture: ComponentFixture<PenalityGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenalityGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenalityGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
