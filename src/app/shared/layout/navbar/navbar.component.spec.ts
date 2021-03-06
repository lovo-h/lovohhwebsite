import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AppRoutingModule,
  SharedModule,
  ProjectCardComponent,
  BizCardComponent,
  FlipcardComponent,
  BlogCardComponent,
} from '../../';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from '../../../home/home.component';
import { ResumeComponent } from '../../../resume/resume.component';
import { ProjectsComponent } from '../../../projects/projects.component';
import { BlogComponent } from '../../../blog/blog.component';
import { BlogTemplateComponent } from '../../../blog-template/blog-template.component';
import { ContactComponent } from '../../../contact/contact.component';
import { Status404Component } from '../../../status404/status404.component';

import { APP_BASE_HREF } from '@angular/common';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        HomeComponent,
        ResumeComponent,
        ProjectsComponent,
        BlogComponent,
        ContactComponent,
        Status404Component,
        ProjectCardComponent,
        BizCardComponent,
        FlipcardComponent,
        BlogCardComponent,
        BlogTemplateComponent,
      ],
      imports: [AppRoutingModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the NavbarComponent', () => {
    expect(component).toBeTruthy();
  });
});
