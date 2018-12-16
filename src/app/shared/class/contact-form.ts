export class ContactForm {
  constructor(public email: string,
              public message: string,
              public captchaid: string,
              public captchasolution: string) {
  }
}
