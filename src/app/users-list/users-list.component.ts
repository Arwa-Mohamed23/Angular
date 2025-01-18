import { Component } from '@angular/core';
import {UserCardComponent} from '../user-card/user-card.component';
import {UserSearchComponent} from '../user-search/user-search.component';
import * as userData from '../../../public/users.json';


@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent, UserSearchComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: any = (userData as any).default;

  receiveEmail(value: string){
    
  }
}
