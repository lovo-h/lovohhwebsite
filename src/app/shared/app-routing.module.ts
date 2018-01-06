import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';
import { ProjectsComponent } from '../projects/projects.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
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
