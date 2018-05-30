import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { Blog } from '../class';
import { BlogCardComponent } from './blog-card.component';
import { HomeComponent } from '../../home/home.component';
import { ResumeComponent } from '../../resume/resume.component';
import {
  SharedModule,
  AppRoutingModule
} from '../';
import { BlogComponent } from '../../blog/blog.component';
import { BizCardComponent, FlipcardComponent, ProjectCardComponent } from '../index';
import { Status404Component } from '../../status404/status404.component';
import { ProjectsComponent } from '../../projects/projects.component';
import { BlogTemplateComponent } from '../../blog-template/blog-template.component';
import { ContactComponent } from '../../contact/contact.component';

import { APP_BASE_HREF } from '@angular/common';

describe('BlogCardComponent', () => {
  let component: BlogCardComponent;
  let fixture: ComponentFixture<BlogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardComponent, BlogComponent, BlogCardComponent,
        HomeComponent, FlipcardComponent, ResumeComponent,
        ProjectsComponent, BlogTemplateComponent, ContactComponent,
        Status404Component, BizCardComponent],
      imports: [AppRoutingModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardComponent);
    component = fixture.componentInstance;
    component.blogObj = new Blog(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      0);
    fixture.detectChanges();
  });

  it('should create the BlogCardComponent', () => {
    expect(component).toBeTruthy();
  });
});
