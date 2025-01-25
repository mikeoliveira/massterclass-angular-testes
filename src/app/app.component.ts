import { Component, signal } from '@angular/core';
import { Post } from './models/post';
import { PostCardComponent } from './post-card/post-card.component';
import { PostFormComponent } from './post-form/post-form.component';

@Component({
  selector: 'app-root',
  imports: [PostFormComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts = signal<Post[]>([])

  addPost(post: Post) {
    this.posts.update((value) => [...value, post]);
  }
}
