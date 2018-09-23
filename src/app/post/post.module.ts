import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PostService],
  declarations: [PostListComponent],
  exports: [PostListComponent]
})
export class PostModule { }
