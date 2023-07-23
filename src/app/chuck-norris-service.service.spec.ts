import { TestBed } from '@angular/core/testing';

import { ChuckNorrisServiceService } from './chuck-norris-service.service';

describe('ChuckNorrisServiceService', () => {
  let service: ChuckNorrisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckNorrisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
