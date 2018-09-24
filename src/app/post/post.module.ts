import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { CatalogService } from './catalogs/catalog.service';
import { CatalogsComponent } from './catalogs/catalogs.component';
import { MatChipsModule, MatCardModule } from '../../../node_modules/@angular/material';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatCardModule,
  ],
  providers: [PostService, CatalogService],
  declarations: [PostListComponent, CatalogsComponent, PostItemComponent],
  exports: [PostListComponent, CatalogsComponent, PostItemComponent]
})
export class PostModule { }
