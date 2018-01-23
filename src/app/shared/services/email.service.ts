import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ContactForm } from '../class';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class EmailService {
  private emailURL = '/email';
  constructor(private api: ApiService) { }

  sendEmail(contactForm: ContactForm) {
    return this.api.post(`${this.emailURL}`, contactForm)
    .map((res: HttpResponse<any>) => {
      return res.status === 204;
    });
  }
}
