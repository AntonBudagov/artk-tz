import { Component, OnInit} from '@angular/core';
import { TodoService }       from './todo.service'
import { Todo }              from './todo';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  providers: [ TodoService ],
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {
  errorMessage: string;
  todos: Todo[];
  title = 'Todos';

  constructor(private todoService: TodoService) {
      //should be moved to ngOnInit lifecycle hook
      this.getTodos();
  }
  ngOnInit() {
    // this.posts = [];
    this.getTodos();
  }



  getTodos() {
      this.todoService.getData()
        .subscribe(
          todos => this.todos = todos,
          error => this.errorMessage = <any>error);
  }
}