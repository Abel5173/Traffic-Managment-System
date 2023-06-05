import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicletableComponent } from './vehicletable.component';

describe('VehicletableComponent', () => {
  let component: VehicletableComponent;
  let fixture: ComponentFixture<VehicletableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicletableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
