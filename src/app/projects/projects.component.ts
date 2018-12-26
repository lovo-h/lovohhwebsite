import { Component, OnDestroy, OnInit } from '@angular/core';
import { MouseStateService } from '../shared/services';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  cardInfoList: any[];

  constructor(private mouseservice: MouseStateService) {
  }

  ngOnInit() {
    this.cardInfoList = [
      {
        title: 'Alzheimer\'s Association',
        image: 'url(/assets/imgs/projects/alz.png)',
        tools: [
          'DJango',
          'Python 2',
          'HTML5',
          'CSS3',
          'JavaScript'
        ],
        buttons: [],
        emptyButtonsText: 'Private',
      },
      {
        title: 'DunGen',
        image: 'url(/assets/imgs/projects/dungen.png)',
        tools: ['Python 2'],
        buttons: [
          {
            url: 'https://github.com/lovo-h/dun_gen',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
      {
        title: 'F.I.R.P',
        image: 'url(/assets/imgs/projects/firp.jpg)',
        tools: ['C#'],
        buttons: [
          {
            url: 'https://github.com/lovo-h/Firp',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
      {
        title: 'Food Acidity (Back End)',
        image: '',
        tools: ['GoLang'],
        buttons: [
          {
            url: 'https://lovohh.com/foodacidity/',
            faImage: 'fa-window-restore',
            text: 'Demo',
            extraStyling: 'lw-demo-link'
          },
          {
            url: 'https://gitlab.com/lovo-h/FoodAcidityAPI',
            faImage: 'fa-gitlab',
            text: 'Gitlab',
            extraStyling: 'lw-gl-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
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
      {
        title: 'Music-Soundbox (Back End)',
        image: '',
        tools: ['GoLang'],
        buttons: [
          {
            url: 'https://github.com/dtrinh100/Music-Playlist/tree/master/src/api',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
      {
        title: 'Music-Soundbox (Front End)',
        image: 'url(/assets/imgs/projects/musicplaylist.png)',
        tools: [
          'Angular-CLI',
          'Bootstrap',
          'CSS3',
          'HTML5',
          'Typescript',
        ],
        buttons: [
          {
            url: 'https://github.com/dtrinh100/Music-Playlist',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
      {
        title: 'OldEgg (Front End)',
        image: 'url(/assets/imgs/projects/oldegg.jpg)',
        tools: [
          'Bootstrap',
          'CSS3',
          'HTML5',
          'JavaScript'
        ],
        buttons: [],
        emptyButtonsText: 'Private',
      },
      {
        title: 'Personal Website (Back End)',
        image: '',
        tools: ['GoLang'],
        buttons: [
          {
            url: 'https://github.com/lovo-h/lovohhwebsiteapi',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
      {
        title: 'Personal Website (Front End)',
        image: 'url(/assets/imgs/projects/personalpage.png)',
        tools: [
          'Angular-CLI',
          'Bootstrap',
          'CSS3',
          'HTML5',
          'Typescript',
        ],
        buttons: [
          {
            url: 'https://github.com/lovo-h/lovohhwebapp',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
      {
        title: 'SoundLight (Android & Raspberry Pi)',
        image: 'url(/assets/imgs/projects/raspi.png)',
        tools: [
          'Android Studio',
          'Java',
          'Python',
        ],
        buttons: [
          {
            url: 'https://github.com/lovo-h/raspberry_pi',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },
        ],
        emptyButtonsText: 'Private',
      },
      {
        title: 'Sudoku Solver',
        image: 'url(/assets/imgs/projects/sudoku.jpg)',
        tools: ['Scala'],
        buttons: [
          {
            url: 'https://github.com/lovo-h/sudoku_solver',
            faImage: 'fa-github',
            text: 'Github',
            extraStyling: 'lw-gh-link'
          },

        ],
        emptyButtonsText: 'Private',
      },
    ];

    this.mouseservice.initMouseStates(this.cardInfoList.length);
  }

  ngOnDestroy(): void {
    this.mouseservice.destroyStates();
  }

}
