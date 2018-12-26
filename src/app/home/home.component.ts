import { Component, OnInit } from '@angular/core';
import { MouseStateService } from '../shared/services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardInfoList: any[];

  constructor(private mouseservice: MouseStateService) {
  }

  ngOnInit() {
    this.cardInfoList = [
      {
        title: 'Food Acidity (Front End)',
        image: 'url(/assets/imgs/projects/foodacidity.png)',
        tools: [
          'Angular-CLI',
          'Bootstrap',
          'CSS3',
          'HTML5',
          'Typescript'
        ],
        buttons: [
          {
            url: 'https://lovohh.com/foodacidity/',
            faImage: 'fa-window-restore',
            text: 'Demo',
            extraStyling: 'lw-demo-link'
          },
          {
            url: 'https://gitlab.com/lovo-h/FoodAcidity',
            faImage: 'fa-gitlab',
            text: 'Gitlab',
            extraStyling: 'lw-gl-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
    ];

    // mouse-state count = project-cards + biz-card count.
    this.mouseservice.initMouseStates(this.cardInfoList.length + 1);
  }

}
