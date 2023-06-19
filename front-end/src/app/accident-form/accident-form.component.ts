import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccidentFormService } from '../Services/accident-form.service';

@Component({
  selector: 'app-accident-form',
  templateUrl: './accident-form.component.html',
  styleUrls: ['./accident-form.component.css']
})
export class AccidentFormComponent implements OnInit {
  accidentForm!: FormGroup;
  vehicles: any[] = [];
  drivers: any[] = [];
  accidentType: string[] = ['Over speed', 'No belt', 'Phone While Driving', 'Red light'];
  region: string[] = ['Region1', 'Region2', 'Region3', 'Region4', 'Region5'];
  zone: string[] = ['Zone1', 'Zone2', 'Zone3', 'Zone4', 'Zone5'];
  wereda: string[] = ['Wereda1', 'Wereda2', 'Wereda3', 'Wereda4', 'Wereda5'];

  constructor(
    private formBuilder: FormBuilder,
    private accidentFormService: AccidentFormService
  ) {}

  ngOnInit(): void {
    this.accidentForm = this.formBuilder.group({
      general: this.formBuilder.group({
        date: [''],
        accidentType: [''],
        reportedBy: ['']
      }),
      address: this.formBuilder.group({
        region: [],
        zone: [],
        wereda: [],
        kebele: [],
        specificLocation: []
      }),
      
      vehicles: this.formBuilder.group({
        vehicle: ['']
      }),
      drivers: this.formBuilder.group({
        driver: ['']
      }),
      accidentDetail: this.formBuilder.group({
        lifeLost: [''],
        majorInjury: [''],
        minorInjury: [''],
        propertyLossCount: [''],
        propertyLossMoney: [''],
        description: ['']
      })
    });
  }

  addVehicle(): void {
    if (this.accidentForm.get('vehicles.vehicle')?.valid) {
      const vehicleData = this.accidentForm.get('vehicles.vehicle')?.value;
      this.vehicles.push(vehicleData);
      this.accidentForm.get('vehicles.vehicle')?.reset();
    }
  }

  getVehicles(): any[] {
    return this.vehicles;
  }

  addDriver(): void {
    if (this.accidentForm.get('drivers.driver')?.valid) {
      const driverData = this.accidentForm.get('drivers.driver')?.value;
      this.drivers.push(driverData);
      this.accidentForm.get('drivers.driver')?.reset();
    }
  }

  getDrivers(): any[] {
    return this.drivers;
  }

  submitForm(): void {
    if (this.accidentForm.valid) {
      const formData = this.accidentForm.value;
      // Call the service to submit the form
      console.log(formData);

      this.accidentFormService.submitAccidentForm(formData).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    } else {
      // Form is invalid, display error messages or perform other actions
    }
  }

  getFormControls(section: string): any {
    const control = this.accidentForm.get(section);
    if (control instanceof FormGroup) {
      return control.controls;
    }
    return null;
  }
}
