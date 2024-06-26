import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  ListUsers: User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.ListUsers = data;
    }, error => {
      console.log(error);
    })
  }

  deleteUser(id: any) {
    this._userService.deleteUser(id).subscribe(data => {
      this.getUsers();
    }, error => {
      console.log(error)
    })
  }

}