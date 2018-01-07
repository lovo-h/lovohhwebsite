import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { ProjectsComponent } from '../projects/projects.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from './contact.component';
import { Status404Component } from '../status404/status404.component';

import { FlipcardComponent, SharedModule } from '../shared';
import { APP_BASE_HREF } from '@angular/common';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ResumeComponent,
        ProjectsComponent,
        BlogComponent,
        ContactComponent,
        Status404Component,
        FlipcardComponent,
      ],
      imports: [ SharedModule ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the ContactComponent', () => {
    expect(component).toBeTruthy();
  });
});
