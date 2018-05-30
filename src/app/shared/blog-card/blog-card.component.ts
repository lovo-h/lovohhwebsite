import { Component, Input, OnInit } from '@angular/core';
import { Blog } from '../class';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blogObj: Blog;

  constructor() {
  }

  ngOnInit() {
  }

  daysSince(dateStr) {
    // Note: '+' (uniary operator) coerces to number
    return Math.floor((+Date.now() - +(new Date(dateStr))) / 86400000);
  }
}
