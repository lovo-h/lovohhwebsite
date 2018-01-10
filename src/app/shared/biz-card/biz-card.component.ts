import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
  constructor(private mouseservice: MouseStateService) { }

  ngOnInit() {
    this.cardInfo = {
      title: 'Card Title',
      subtitle: 'Card Subtitle',
      image: '/path/to/image.jpg',
      attributes: [
        {name: 'Attribute 1', icon: 'Icon 1', href: 'https://www.google.com'},
        {name: 'Attribute 2', icon: 'Icon 2', href: 'https://www.ask.com'},
      ]
    };

    this.cardNum = 0;
    this.mouseservice.initMouseStates(1);
    this.mouseBehavior = this.mouseservice.getState(this.cardNum);
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
