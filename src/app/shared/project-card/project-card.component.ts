import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MouseStateService } from '../services';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() cardNum: any;
  @Input() cardInfo: any;
  private mouseBehavior: BehaviorSubject<string>;

  constructor(private mouseservice: MouseStateService) {
  }

  ngOnInit() {
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
}
