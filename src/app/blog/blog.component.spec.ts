import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { BlogCardComponent } from '../shared';
import { BlogTemplateComponent } from '../blog-template/blog-template.component';
import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { Status404Component } from '../status404/status404.component';

import {
  AppRoutingModule,
  ProjectCardComponent,
  BizCardComponent,
  FlipcardComponent,
  SharedModule
} from '../shared';

import { APP_BASE_HREF } from '@angular/common';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCardComponent, BlogComponent, BlogCardComponent,
        HomeComponent, FlipcardComponent, ResumeComponent, ProjectsComponent,
        BlogTemplateComponent, ContactComponent, Status404Component,
        BizCardComponent],
      imports: [AppRoutingModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the BlogComponent', () => {
    expect(component).toBeTruthy();
  });
});
