import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




import {PhotoComponent} from './photos/photo.component';
import {PostComponent} from './posts/post.component';
import {TodoComponent} from './todos/todo.component';
import {UserComponent} from './users/user.component'

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  //{path: 'navigation', componnent: NavigationComponent},
  {path: 'posts', component: PostComponent },
  {path: 'photo', component: PhotoComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'users', component: UserComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}