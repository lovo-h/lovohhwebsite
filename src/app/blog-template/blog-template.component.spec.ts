import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTemplateComponent } from './blog-template.component';
import { BlogService, SharedModule } from '../shared';
import { Blog } from '../shared/class';
import { BehaviorSubject } from 'rxjs-compat';
import { Injectable } from '@angular/core';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() {
    return this._testParams;
  }

  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return {paramMap: convertToParamMap(this.testParams)};
  }
}

@Injectable()
class BlogServiceStub extends BlogService {
  blogsArr: Blog[];
  blogs: { [snakedTitle: string]: number };

  constructor() {
    super();

    this.blogsArr = [
      new Blog(
        'Temporary Test Title To Test Things That Typically Turn Terribly Tough',
        'temporary-test-title-to-test-things-that-typically-turn-terribly-tough',
        'Test Author',
        'http://example.com',
        'url(/assets/imgs/projects/raspi.png)',
        'Backend',
        '03/21/1991',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus egestas eros non ultrices.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus egestas ' +
        'eros non ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, ' +
        'per inceptos himenaeos. Proin maximus, sem ac fermentum aliquet, nunc urna dignissim ' +
        'libero, sit amet sagittis ligula velit consequat nisi. In laoreet lectus egestas velit ' +
        'sollicitudin.',
        999,
        99999
      ),
    ];

    this.blogs = {};

    this.blogsArr.forEach((blog: Blog, idx: number) => {
      this.blogs[blog.hyphenedTitle] = idx;
    });
  }

  getBlogs() {
    return this.blogsArr;
  }

  getBlog(hyphenedTitle) {
    return this.blogsArr[this.blogs[hyphenedTitle]];
  }
}

describe('BlogTemplateComponent', () => {
  let component: BlogTemplateComponent;
  let fixture: ComponentFixture<BlogTemplateComponent>;
  let activatedRoute: ActivatedRouteStub;
  let blogService: BlogServiceStub;

  beforeEach(async(() => {
    blogService = new BlogServiceStub();
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.testParams = {hyphenedTitle: blogService.blogsArr[0].hyphenedTitle};

    TestBed.configureTestingModule({
      declarations: [BlogTemplateComponent],
      imports: [SharedModule, HttpClientModule],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: BlogService, useValue: blogService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the BlogTemplateComponent', () => {
    expect(component).toBeTruthy();
  });
});
