import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { Status404Component } from './status404/status404.component';
import {
  AppRoutingModule,
  SharedModule,
  BizCardComponent,
  FlipcardComponent,
  ProjectCardComponent,
  FooterComponent,
  NavbarComponent,
  BlogCardComponent,
} from './shared';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ResumeComponent,
    ProjectsComponent,
    BlogComponent,
    Status404Component,
    FlipcardComponent,
    BizCardComponent,
    ProjectCardComponent,
    BlogCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
