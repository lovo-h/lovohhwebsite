import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from '../shared/class';
import { CaptchaService, EmailService } from '../shared/services';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  exists: boolean;
  isSubmitting: boolean;
  submitAttempt: boolean;
  contactFormModel: ContactForm;

  constructor(private captchaAPI: CaptchaService, private emailAPI: EmailService) {
  }

  ngOnInit() {
    this.exists = true;
    this.submitAttempt = false;
    this.isSubmitting = false;
    this.resetContactForm();
    this.resetCaptchaID();
  }

  resetContactForm() {
    this.contactFormModel = new ContactForm( '', '', '', '');
  }

  resetCaptchaID() {
    this.captchaAPI.getCaptchaID()
      .pipe(takeWhile(_ => this.exists))
      .subscribe((id: string) => {
        this.contactFormModel.captchaid = id;
      });
  }

  onSubmit(contactForm: NgForm) {
    const contactFormCopy = Object.assign({}, this.contactFormModel);
    contactFormCopy.captchasolution = contactFormCopy.captchasolution.toString();

    this.submitAttempt = true;
    this.isSubmitting = true;

    this.emailAPI.sendEmail(contactFormCopy)
      .pipe(takeWhile(_ => this.exists))
      .subscribe(_ => {
        contactForm.reset();
      }, _ => {
        this.contactFormModel.captchasolution = '';
        this.resetCaptchaID();
        this.isSubmitting = false;
      });
  }

  ngOnDestroy(): void {
    this.exists = false;
  }

}
