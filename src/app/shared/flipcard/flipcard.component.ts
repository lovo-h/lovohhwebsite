import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

const CARD_FLIP_ANIMATIONS = [
  state('front', style({
    transform: 'rotateY(0)'
  })),
  state('back', style({
    transform: 'rotateY(179.9deg)'
  })),
  transition('front => back', animate('500ms ease-out')),
  transition('back => front', animate('500ms ease-in'))
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
  transition('tilted-front => untilted-front', animate('500ms ease-in')),
  transition('tilted-back => untilted-back', animate('500ms ease-in')),
  transition('tilted-back => untilted-back', animate('500ms ease-in'))
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
export class FlipcardComponent implements OnInit {
  cardSide: string;
  cardTilt: string;

  constructor() {
  }

  ngOnInit() {
    this.cardSide = 'front';
    this.cardTilt = 'untilted-front';
  }

  toggleFlip() {
    this.cardSide = (this.cardSide === 'back') ? 'front' : 'back';
  }

  mouseEnter() {
    this.cardTilt = 'tilted-' + this.cardSide;
  }

  mouseLeave() {
    this.cardTilt = 'untilted-' + this.cardSide;
  }
}
