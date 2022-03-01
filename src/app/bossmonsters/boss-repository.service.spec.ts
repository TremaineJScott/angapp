import { TestBed } from '@angular/core/testing';

import { BossRepositoryService } from './boss-repository.service';

describe('BossRepositoryService', () => {
  let service: BossRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BossRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
