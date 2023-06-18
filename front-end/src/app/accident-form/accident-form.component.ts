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

  constructor(
    private formBuilder: FormBuilder,
    private accidentFormService: AccidentFormService
  ) {}

  ngOnInit(): void {
    this.accidentForm = this.formBuilder.group({
      general: this.formBuilder.group({
        date: ['', Validators.required],
        accidentType: ['', Validators.required],
        reportedBy: ['', Validators.required]
      }),
      address: this.formBuilder.group({
        region: ['', Validators.required],
        zone: ['', Validators.required],
        wereda: ['', Validators.required],
        kebele: ['', Validators.required],
        specificLocation: ['', Validators.required]
      }),
      vehicles: this.formBuilder.group({
        vehicle: ['', Validators.required]
      }),
      drivers: this.formBuilder.group({
        driver: ['', Validators.required]
      }),
      accidentDetail: this.formBuilder.group({
        lifeLost: ['', Validators.required],
        majorInjury: ['', Validators.required],
        minorInjury: ['', Validators.required],
        propertyLossCount: ['', Validators.required],
        propertyLossMoney: ['', Validators.required],
        description: ['', Validators.required]
      })
    });
  }

  onSubmit(): void {
    if (this.accidentForm.valid) {
      const formData = this.accidentForm.value;
      // Call the service to submit the form
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

  // Helper method to access form controls easily in the template
  getFormControls(section: string): any {
    const control = this.accidentForm.get(section);
    if (control instanceof FormGroup) {
      return control.controls;
    }
    return null;
  }
  
}
