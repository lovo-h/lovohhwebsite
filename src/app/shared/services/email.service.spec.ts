import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService, EmailService } from './';

describe('EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, EmailService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should create the EmailService', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
