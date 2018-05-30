import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';

describe('BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService]
    });
  });

  it('should create the BlogService', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
