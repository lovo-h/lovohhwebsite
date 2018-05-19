import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CaptchaService {
  private captchaURL = '/captcha';

  constructor(private api: ApiService) {
  }

  getCaptchaID(): Observable<any> {
    return this.api.get(`${this.captchaURL}`)
      .pipe(map((res: HttpResponse<any>) => res.body.id));
  }

  reloadCaptchaID(id: string) {
    return this.api.put(`${this.captchaURL}`, {'id': id})
      .pipe(map((res: HttpResponse<any>) => res.status === 204));
  }
}
