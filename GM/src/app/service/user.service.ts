import { Injectable } from '@angular/core';

import { User } from '../dto/user';
import { USERS } from '../mock/user.mock';

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }
}
