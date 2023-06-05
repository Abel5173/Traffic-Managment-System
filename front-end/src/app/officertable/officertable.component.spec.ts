import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficertableComponent } from './officertable.component';

describe('OfficertableComponent', () => {
  let component: OfficertableComponent;
  let fixture: ComponentFixture<OfficertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficertableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
