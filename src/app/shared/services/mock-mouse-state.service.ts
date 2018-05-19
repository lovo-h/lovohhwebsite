import { BehaviorSubject } from 'rxjs';

export class MockMouseStateService {
  stateNum: number;

  getState(num) {
    this.stateNum = num;
    return new BehaviorSubject<string>('mousestate1');
  }
}
