import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/class/';
import { BlogService } from '../shared/services';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogAPI: BlogService) {
  }

  ngOnInit() {
    this.blogs = this.blogAPI.getBlogs();
  }
}
