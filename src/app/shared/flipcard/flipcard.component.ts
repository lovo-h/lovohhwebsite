import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-flipcard',
  templateUrl: './flipcard.component.html',
  styleUrls: ['./flipcard.component.scss'],
  animations: [
    trigger('flipState', CARD_FLIP_ANIMATIONS)
  ]
})
export class FlipcardComponent implements OnInit {
  @Input() cardInfo: any;
  cardSide: string;

  constructor() {
  }

  ngOnInit() {
    this.cardSide = 'front';
  }

  toggleFlip() {
    this.cardSide = (this.cardSide === 'back') ? 'front' : 'back';
  }
}
