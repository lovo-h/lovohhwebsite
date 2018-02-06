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
        title: 'Alzheimer\'s Association',
        tools: [
          'DJango',
          'Python 2',
          'HTML5',
          'CSS3',
          'JavaScript'
        ],
        githubUrl: '',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/alz.png)',
        emptyURLText: 'Private',
      },
      {
        title: 'DunGen',
        tools: ['Python 2'],
        githubUrl: 'https://github.com/lovo-h/dun_gen',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/dungen.png)',
        emptyURLText: '',
      },
      {
        title: 'F.I.R.P',
        tools: ['C#'],
        githubUrl: 'https://github.com/lovo-h/Firp',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/firp.jpg)',
        emptyURLText: '',
      },
      {
        title: 'Music-Soundbox (Back End)',
        tools: [
          'GoLang 1.8'
        ],
        githubUrl: 'https://github.com/dtrinh100/Music-Playlist/tree/master/src/api',
        blogUrl: '',
        image: '',
        emptyURLText: '',
      },
      {
        title: 'Music-Soundbox (Front End)',
        tools: [
          'Angular-CLI 1.3',
          'Bootstrap 3.3',
          'CSS3',
          'HTML5',
          'Typescript 2.4',
        ],
        githubUrl: 'https://github.com/dtrinh100/Music-Playlist',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/musicplaylist.png)',
        emptyURLText: '',
      },
      {
        title: 'OldEgg (Front End)',
        tools: [
          'Bootstrap',
          'CSS3',
          'HTML5',
          'JavaScript'
        ],
        githubUrl: 'https://github.com/lovo-h/raspberry_pi',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/oldegg.jpg)',
        emptyURLText: '',
      },
      {
        title: 'Personal Website (Front End)',
        tools: [
          'Angular-CLI 1.6',
          'Bootstrap 4.0',
          'CSS3',
          'HTML5',
          'Typescript 2.6',
        ],
        githubUrl: 'https://github.com/lovo-h/lovohhwebapi',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/personalpage.png)',
        emptyURLText: '',
      },
      {
        title: 'Personal Website (Back End)',
        tools: [
          'GoLang 1.9'
        ],
        githubUrl: 'https://github.com/lovo-h/lovohhwebapi',
        blogUrl: '',
        image: '',
        emptyURLText: '',
      },
      {
        title: 'SoundLight (Android & Raspberry Pi)',
        tools: [
          'Android Studio',
          'Java',
          'Python',
        ],
        githubUrl: 'https://github.com/lovo-h/raspberry_pi',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/raspi.png)',
        emptyURLText: '',
      },
      {
        title: 'Sudoku Solver',
        tools: ['Scala'],
        githubUrl: 'https://github.com/lovo-h/sudoku_solver',
        blogUrl: '',
        image: 'url(/assets/imgs/projects/sudoku.jpg)',
        emptyURLText: '',
      },
    ];

    this.mouseservice.initMouseStates(this.cardInfoList.length);
  }

  ngOnDestroy(): void {
    this.mouseservice.destroyStates();
  }

}
