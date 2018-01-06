import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from '../../../home/home.component';
import { ResumeComponent } from '../../../resume/resume.component';
import { ContactComponent } from '../../../contact/contact.component';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../../shared.module';


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavbarComponent,
        HomeComponent,
        ResumeComponent,
        ContactComponent
      ],
      imports: [SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
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
