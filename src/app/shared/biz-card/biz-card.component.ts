import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MouseStateService } from '../services';

@Component({
  selector: 'app-biz-card',
  templateUrl: './biz-card.component.html',
  styleUrls: ['./biz-card.component.scss']
})
export class BizCardComponent implements OnInit, OnDestroy {
  private mouseBehavior: BehaviorSubject<string>;
  cardInfo: any;
  cardNum: number;

  constructor(private mouseservice: MouseStateService) {
  }

  ngOnInit() {
    this.cardInfo = {
      title: 'Hector Lovo',
      subtitle: 'Software Engineer',
      image: 'url(/assets/imgs/hector_lovo.jpg)',
      attributes: [
        {icon: 'fa-linkedin-square', href: 'https://www.linkedin.com/in/lovohh'},
        {icon: 'fa-github-square', href: 'https://github.com/lovo-h'},
        {icon: 'fa-gitlab', href: 'https://gitlab.com/lovo-h'}
      ]
    };

    this.cardNum = 0;
    this.mouseservice.initMouseStates(1);
    this.mouseBehavior = this.mouseservice.getState(this.cardNum);
  }

  onMouseEnterRestrictedArea() {
    this.onMouseLeave();
  }

  onMouseLeaveRestrictedArea() {
    this.onMouseEnter();
  }

  onMouseClick() {
    this.mouseBehavior.next('mouseclick');
  }

  onMouseEnter() {
    this.mouseBehavior.next('mouseenter');
  }

  onMouseLeave() {
    this.mouseBehavior.next('mouseleave');
  }

  ngOnDestroy(): void {
    this.mouseservice.destroyStates();
  }
}
