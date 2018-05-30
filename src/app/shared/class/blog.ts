export class Blog {
  constructor(public title: string,
              public hyphenedTitle: string,
              public author: string,
              public authorURL: string,
              public imageURL: string,
              public category: string,
              public date: string,
              public excerpt: string,
              public content: string,
              public readTime: number,
              public viewsCount: number) {
  }
}
