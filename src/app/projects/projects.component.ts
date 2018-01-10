import { Component, OnDestroy, OnInit } from '@angular/core';
import { MouseStateService } from '../shared/services';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  cardInfoList: [any];

  constructor(private mouseservice: MouseStateService) {
  }

  ngOnInit() {
    this.cardInfoList = [
      {
        title: 'Personal Website',
        tools: [
          'Tool One',
          'Tool Three',
          'Tool Five',
          'Tool Seven',
        ],
      },
      {
        title: 'FoodCI',
        tools: [
          'Tool One',
          'Tool Two',
          'Tool Three',
        ],
      }
    ];

    this.mouseservice.initMouseStates(this.cardInfoList.length);
  }

  ngOnDestroy(): void {
    this.mouseservice.destroyStates();
  }

}
