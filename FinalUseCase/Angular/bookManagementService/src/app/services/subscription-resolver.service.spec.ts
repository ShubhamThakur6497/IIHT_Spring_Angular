import { TestBed } from '@angular/core/testing';

import { SubscriptionResolverService } from './subscription-resolver.service';

describe('SubscriptionResolverService', () => {
  let service: SubscriptionResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
