export class ContactForm {
  constructor(public name: string,
              public email: string,
              public subject: string,
              public message: string,
              public captchaid: string,
              public captchasolution: string) {
  }
}
