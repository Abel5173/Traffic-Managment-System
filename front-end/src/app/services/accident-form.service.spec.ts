import { TestBed } from '@angular/core/testing';

import { AccidentFormService } from './accident-form.service';

describe('AccidentFormService', () => {
  let service: AccidentFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccidentFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
