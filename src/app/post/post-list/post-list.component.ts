import { Component, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(public postService: PostService) { }

  @Output() key: string;

  ngOnInit() {
    this.postService.getPosts(this.key).subscribe((res) => {
      console.log(res);
    })
  }

}
