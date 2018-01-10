import { TestBed, inject } from '@angular/core/testing';

import { MouseStateService } from './mouse-state.service';

describe('MouseStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouseStateService]
    });
  });

  it('should create the MouseStateService', inject([MouseStateService], (service: MouseStateService) => {
    expect(service).toBeTruthy();
  }));
});
