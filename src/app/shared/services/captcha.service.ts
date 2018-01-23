import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';


@Injectable()
export class CaptchaService {
  private captchaURL = '/captcha';

  constructor(private api: ApiService) { }

  getCaptchaID(): Observable<any> {
    return this.api.get(`${this.captchaURL}`)
      .map((res: HttpResponse<any>) => {
        return res.body.id;
      });
  }

  reloadCaptchaID(id: string) {
    return this.api.put(`${this.captchaURL}`, {'id': id})
      .map((res: HttpResponse<any>) => {
        return res.status === 204;
      });
  }

}
