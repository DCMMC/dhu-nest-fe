import { Component, OnInit, Output, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../../model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(public postService: PostService) { }

  @Input() key: string;
  posts: Post[] = [];

  ngOnInit() {
    this.postService.getPosts(this.key).subscribe((posts) => {
      this.posts = posts;
    });
  }

}
