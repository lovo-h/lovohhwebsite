import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { MouseStateService } from '../services';
import { Subscription } from 'rxjs/Subscription';


const CARD_FLIP_ANIMATIONS = [
  state('front', style({
    transform: 'rotateY(0)'
  })),
  state('back', style({
    transform: 'rotateY(179.9deg)'
  })),
  transition('front => back', animate('500ms ease-out')),
  transition('back => front', animate('500ms ease-out'))
];

const CARD_TILT_ANIMATIONS = [
  state('untilted-front', style({
    transform: 'rotateY(0)'
  })),
  state('tilted-front', style({
    transform: 'rotateY(10.0deg)'
  })),
  state('untilted-back', style({
    transform: 'rotateY(179.9deg)'
  })),
  state('tilted-back', style({
    transform: 'rotateY(169.9deg)'
  })),
  transition('untilted-front => tilted-front', animate('500ms ease-out')),
  transition('tilted-front => untilted-front', animate('500ms ease-out')),
  transition('untilted-back => tilted-back', animate('500ms ease-out')),
  // TODO: bug: card flips a lot if user hovers mouse in/out rapidly, if ms > 0
  transition('tilted-back => untilted-back', animate('0ms ease-out'))
];

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss'],
  animations: [
    trigger('flipState', CARD_FLIP_ANIMATIONS),
    trigger('tiltState', CARD_TILT_ANIMATIONS)
  ]
})
export class FlipcardComponent implements OnInit, OnDestroy {
  @Input() cardNum: number;
  cardSide: string;
  cardTilt: string;
  mouseStateSubscription: Subscription;

  constructor(private mouseservice: MouseStateService) {
  }

  ngOnInit() {
    this.cardSide = 'front';
    this.cardTilt = 'untilted-front';

    this.mouseStateSubscription = this.mouseservice.getState(this.cardNum)
      .subscribe((mouseState: string) => {
        switch (mouseState) {
          case 'mouseenter': {
            this.mouseEnter();
            break;
          }
          case 'mouseleave': {
            this.mouseLeave();
            break;
          }
          case 'mouseclick': {
            this.mouseClick();
            break;
          }
          default: {
            break;
          }
        }
      });
  }

  mouseClick() {
    this.cardSide = (this.cardSide === 'back') ? 'front' : 'back';
  }

  mouseEnter() {
    this.cardTilt = 'tilted-' + this.cardSide;
  }

  mouseLeave() {
    this.cardTilt = 'untilted-' + this.cardSide;
  }

  ngOnDestroy(): void {
    this.mouseStateSubscription.unsubscribe();
  }

}
