import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CaptchaService } from './captcha.service';
import { ApiService } from './api.service';

describe('CaptchaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, CaptchaService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should create the CaptchaService', inject([CaptchaService], (service: CaptchaService) => {
    expect(service).toBeTruthy();
  }));
});
