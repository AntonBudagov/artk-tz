import { Component, OnInit } from '@angular/core';
import { UserService }       from './user.service'
import { User }              from './user';

@Component({
  moduleId: module.id,
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  providers: [ UserService ],
  styles: ['.error {color:red;}']
})


export class UserListComponent implements OnInit {
  errorMessage: string;
  users: User[];
  title = 'Posts';
  constructor(private userService: UserService) {
      //should be moved to ngOnInit lifecycle hook
      this.getUsers();
  }
  ngOnInit() {

    this.getUsers();
  }

  getUsers() {
      this.userService.getData()
          .subscribe(
              users => this.users = users,
              error => this.errorMessage = <any>error);
  }
}