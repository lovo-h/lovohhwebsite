import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { ProjectsComponent } from '../projects/projects.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';
import { Status404Component } from '../status404/status404.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: Status404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
