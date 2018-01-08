import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biz-card',
  templateUrl: './biz-card.component.html',
  styleUrls: ['./biz-card.component.scss']
})
export class BizCardComponent implements OnInit {
  cardInfo: any;
  constructor() { }

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
  }

}
