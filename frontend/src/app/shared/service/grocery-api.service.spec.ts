import { TestBed } from '@angular/core/testing';

import { GroceryApiService } from './grocery-api.service';

describe('GroceryApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroceryApiService = TestBed.get(GroceryApiService);
    expect(service).toBeTruthy();
  });
});
