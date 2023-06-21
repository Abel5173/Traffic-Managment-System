import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccidentFormService } from '../Services/accident-form.service';
import { DriverService } from '../Services/driver.service';
import { VehicleService } from '../Services/vehicle.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-accident-form',
  templateUrl: './accident-form.component.html',
  styleUrls: ['./accident-form.component.css'],
})
export class AccidentFormComponent {
  vehicles: any[] = [];
  drivers: any[] = [];
  accidentType: string[] = [
    'Rear-end collisions',
    'Side-impact collisions',
    'Head-on collisions',
    'Sideswipe accidents',
    'Multi-auto accidents',
    'Single-vehicle accidents',
    'Blind spot accidents',
    'Rollover accidents',
    'Low-speed accidents',
    'Merging accidents',
  ];
  region: string[] = ['Region1', 'Region2', 'Region3', 'Region4', 'Region5'];
  zone: string[] = ['Zone1', 'Zone2', 'Zone3', 'Zone4', 'Zone5'];
  wereda: string[] = ['Wereda1', 'Wereda2', 'Wereda3', 'Wereda4', 'Wereda5'];

  constructor(
    private formBuilder: FormBuilder,
    private accidentFormService: AccidentFormService,
    private driverService: DriverService,
    private vehicleService: VehicleService
  ) {}
  accidentFormGroup = this.formBuilder.group({
    date: ['', Validators.required],
    accidentType: ['', Validators.required],
    reportedBy: ['', Validators.required],
    region: ['', Validators.required],
    zone: ['', Validators.required],
    wereda: ['', Validators.required],
    kebele: ['', Validators.required],
    specificLocation: ['', Validators.required],
    vehicle: ['', Validators.required],
    driver: ['', Validators.required],
    lifeLost: ['', Validators.required],
    majorInjury: ['', Validators.required],
    minorInjury: ['', Validators.required],
    propertyLossCount: ['', Validators.required],
    propertyLossMoney: ['', Validators.required],
    description: ['', Validators.required],
  });
  onSubmit() {
    // console.log(this.accidentFormGroup.value);
    this.accidentFormService.submitAccidentForm(this.accidentFormGroup.value);
  }
  addDriver() {
    const driveValue = this.accidentFormGroup.get('driver').value;
  }
  getDrivers() {
    this.drivers.push();
  }

  addVehicle() {
      
  }

  getVehicles() {}
}
