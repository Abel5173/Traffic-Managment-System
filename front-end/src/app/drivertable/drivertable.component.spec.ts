import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivertableComponent } from './drivertable.component';

describe('DrivertableComponent', () => {
  let component: DrivertableComponent;
  let fixture: ComponentFixture<DrivertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivertableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
