import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import  {AppRoutingModule} from './app-routing.module'

// import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';

import { requestOptionsProvider }   from './default-request-options.service';

import { AppComponent }             from './app.component';


import { PhotoListComponent } from './photos/photo-list.component';
import { PhotoComponent } from './photos/photo.component';

import { PostListComponent }        from './posts/post-list.component';
import { PostComponent }            from './posts/post.component';

import { TodoListComponent }        from './todos/todo-list.component';
import { TodoComponent }            from './todos/todo.component';

import { UserListComponent }        from './users/user-list.component';
import { UserComponent }            from './users/user.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(HeroData)
  ],
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoComponent,
    PostListComponent,
    PostComponent,
    TodoListComponent,
    TodoComponent,
    UserListComponent,
    UserComponent
  ],
  providers: [ requestOptionsProvider ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  //
}
