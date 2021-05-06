import { TestBed } from '@angular/core/testing';

import { AddEmployeesService } from './add-employees.service';

describe('AddEmployeesService', () => {
  let service: AddEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
