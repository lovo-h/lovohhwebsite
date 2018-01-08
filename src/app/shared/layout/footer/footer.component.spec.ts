import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  AppRoutingModule,
  SharedModule,
  BizCardComponent,
  FlipcardComponent
} from '../../';
import { FooterComponent } from './footer.component';
import { HomeComponent } from '../../../home/home.component';
import { ResumeComponent } from '../../../resume/resume.component';
import { ProjectsComponent } from '../../../projects/projects.component';
import { BlogComponent } from '../../../blog/blog.component';
import { ContactComponent } from '../../../contact/contact.component';
import { Status404Component } from '../../../status404/status404.component';

import { APP_BASE_HREF } from '@angular/common';


describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        HomeComponent,
        ResumeComponent,
        ProjectsComponent,
        BlogComponent,
        ContactComponent,
        Status404Component,
        BizCardComponent,
        FlipcardComponent
      ],
      imports: [AppRoutingModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the FooterComponent', () => {
    expect(component).toBeTruthy();
  });
});
