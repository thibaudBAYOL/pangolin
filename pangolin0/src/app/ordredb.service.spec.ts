import { TestBed } from '@angular/core/testing';

import { OrdredbService } from './ordredb.service';

describe('OrdredbService', () => {
  let service: OrdredbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdredbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
