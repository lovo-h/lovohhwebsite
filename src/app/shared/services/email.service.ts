import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ContactForm } from '../class';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailService {
  private emailURL = '/email';
  constructor(private api: ApiService) { }

  sendEmail(contactForm: ContactForm) {
    return this.api.post(`${this.emailURL}`, contactForm)
      .pipe(map((res: HttpResponse<any>) => res.status === 204));
  }
}
