import { TestBed } from '@angular/core/testing';

import { BookcontentresolverService } from './bookcontentresolver.service';

describe('BookcontentresolverService', () => {
  let service: BookcontentresolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcontentresolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
