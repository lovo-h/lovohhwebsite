import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MouseStateService, EmailService, CaptchaService, ApiService, BlogService } from './services';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [],
  providers: [ApiService, BlogService, CaptchaService, EmailService, MouseStateService],
  exports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class SharedModule {}
