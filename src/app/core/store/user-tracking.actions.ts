import { Action } from '@ngrx/store';
import { LoggedInUser, User } from '../models/user.model';

export const ADD_USER = 'ADD_USER';
export const ADD_USERS = 'ADD_USERS';
export const LOGIN_USER = 'LOGIN_USER';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: LoggedInUser) {}
}

export class AddUser implements Action {
  readonly type = ADD_USER;
  constructor(public payload: User) {}
}

export class AddUsers implements Action {
  readonly type = ADD_USERS;
  constructor(public payload: User[]) {}
}

export type UserTrackingActions = LoginUser | AddUser | AddUsers;
