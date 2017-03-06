import { Component }         from '@angular/core';



import {PostComponent} from './posts/post.component'
import {PhotoComponent} from './photos/photo.component'
import {TodoComponent} from './todos/todo.component'


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
        <nav>
          <a routerLink="/photo" routerLinkActive="">Photo</a>
          <a routerLink="/posts" routerLinkActive="active">Posts</a>
          <a routerLink="/todos" routerLinkActive="">Todos</a>
          <a routerLink="/users" routerLinkActive="">Users</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
  title = 'Fetching: ';
}