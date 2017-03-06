import {Component}  from '@angular/core';
import { Router }            from '@angular/router';

import {TodoListComponent} from './todo-list.component';
import {TodoService} from './todo.service';

@Component({
    selector: 'todo-parent',
    template: `
        <todo-list></todo-list>
    `,
    providers: <any>[TodoService]
})
export class TodoComponent {

}