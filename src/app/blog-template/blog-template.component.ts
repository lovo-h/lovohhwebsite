import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/class';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/services';

@Component({
  selector: 'app-blog-template',
  templateUrl: './blog-template.component.html',
  styleUrls: ['./blog-template.component.scss']
})
export class BlogTemplateComponent implements OnInit {
  blog: Blog;

  constructor(private route: ActivatedRoute, private blogAPI: BlogService
  ) {
  }

  ngOnInit() {
    const hyphenedTitle = this.route.snapshot.paramMap.get('hyphenedTitle');
    this.blog = this.blogAPI.getBlog(hyphenedTitle);
  }
}
