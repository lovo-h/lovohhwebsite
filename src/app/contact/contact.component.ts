import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactForm } from '../shared/class';
import { CaptchaService, EmailService } from '../shared/services';
import 'rxjs/add/operator/takeWhile';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  exists: boolean;
  isSubmitting: boolean;
  submitAttempt: boolean;
  submitted: boolean;
  contactFormModel: ContactForm;

  constructor(private captchaAPI: CaptchaService, private emailAPI: EmailService) {
  }

  ngOnInit() {
    this.exists = true;
    this.submitAttempt = false;
    this.submitted = false;
    this.isSubmitting = false;
    this.resetContactForm();
    this.resetCaptchaID();
  }

  resetContactForm() {
    this.contactFormModel = new ContactForm('', '', '', '', '', '');
  }

  resetCaptchaID() {
    this.captchaAPI.getCaptchaID()
      .takeWhile(_ => this.exists)
      .subscribe((id: string) => {
        this.contactFormModel.captchaid = id;
      });
  }

  reloadCaptchaImage() {
    if (this.contactFormModel.captchaid === '') {
      return;
    }

    const id = this.contactFormModel.captchaid;
    this.contactFormModel.captchaid = '';

    this.captchaAPI.reloadCaptchaID(id)
      .takeWhile(_ => this.exists)
      .subscribe(_ => {
        this.contactFormModel.captchaid = id;
      });
  }

  onSubmit(contactForm: NgForm) {
    const contactFormCopy = Object.assign({}, this.contactFormModel);
    contactFormCopy.captchasolution = contactFormCopy.captchasolution.toString();

    this.submitAttempt = true;
    this.isSubmitting = true;
    this.emailAPI.sendEmail(contactFormCopy)
      .takeWhile(_ => this.exists)
      .subscribe(_ => {
        contactForm.reset();
        this.submitted = true;
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
