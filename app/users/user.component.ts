import {Component}  from '@angular/core';
import { Router }            from '@angular/router';

import {UserListComponent} from './user-list.component';
import {UserService} from './user.service';

@Component({
    selector: 'user-parent',
    template: `
        <user-list></user-list>
    `,
    providers: <any>[UserService]
})
export class UserComponent {

}