import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class MockMouseStateService {
  stateNum: number;

  getState(num) {
    this.stateNum = num;
    return new BehaviorSubject<string>('mousestate1');
  }
}
