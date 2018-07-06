import { Injectable } from '@angular/core';
import { Blog } from '../class';
import { cdb_csv_blog } from './tmp_blogs/cdb_csv';
import { cdb_getstarted } from './tmp_blogs/cdb_getstarted';
import { cdb_aspnet_usda_p1, cdb_aspnet_usda_p2, cdb_aspnet_usda_p3 } from './tmp_blogs/cdb_aspnet_usda';

@Injectable()
export class BlogService {
  blogsArr: Blog[];
  blogs: { [snakedTitle: string]: number };

  constructor() {


    this.blogsArr = [
      cdb_csv_blog,
      cdb_aspnet_usda_p3,
      cdb_aspnet_usda_p2,
      cdb_aspnet_usda_p1,
      cdb_getstarted,
    ];

    this.blogs = {};

    this.blogsArr.forEach((blog: Blog, idx: number) => {
      this.blogs[blog.hyphenedTitle] = idx;
    });
  }

  getBlogs() {
    return this.blogsArr;
  }

  getBlog(hyphenedTitle) {
    return this.blogsArr[this.blogs[hyphenedTitle]];
  }
}
