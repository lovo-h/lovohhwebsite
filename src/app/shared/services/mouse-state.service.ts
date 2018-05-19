import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MouseStateService {
  mouseStates: BehaviorSubject<string>[];

  constructor() {
    this.mouseStates = [];
  }

  initMouseStates(count: number) {
    for (let c = 0; c < count; c++) {
      this.mouseStates.push(new BehaviorSubject<string>(''));
    }
  }

  getState(idx: number) {
    return this.mouseStates[idx];
  }

  destroyStates() {
    this.mouseStates = [];
  }
}
