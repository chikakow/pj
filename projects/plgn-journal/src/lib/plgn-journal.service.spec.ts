import { TestBed } from '@angular/core/testing';

import { PlgnJournalService } from './plgn-journal.service';

describe('PlgnJournalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlgnJournalService = TestBed.get(PlgnJournalService);
    expect(service).toBeTruthy();
  });
});
