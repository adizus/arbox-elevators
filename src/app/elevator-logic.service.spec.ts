import { TestBed } from '@angular/core/testing';

import { ElevatorLogicService } from './elevator-logic.service';

describe('ElevatorLogicService', () => {
  let service: ElevatorLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevatorLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
