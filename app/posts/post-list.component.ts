import { Component, OnInit } from '@angular/core';
import { PostService }       from './post.service'
import { Post }              from './post';

@Component({
  moduleId: module.id,
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  providers: [ PostService ],
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit {
  errorMessage: string;
  posts: Post[];
  title = 'Posts';
  constructor(private postService: PostService) {
      //should be moved to ngOnInit lifecycle hook
      this.getPosts();
  }
  ngOnInit() {
    // this.posts = [];
    this.getPosts();
  }

  getPosts() {
      this.postService.getData()
          .subscribe(
              posts => this.posts = posts,
              error => this.errorMessage = <any>error);
  }
}