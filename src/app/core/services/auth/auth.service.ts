import { Injectable } from '@angular/core';
import { IUser} from '../../../shared/models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: `${userName}`,
      firstName: 'Camilo',
      lastName: 'Rivera',
      auth: true
    };
    localStorage.setItem('loged', `${true}`);
    localStorage.setItem('name', `${userName}`);
  }
}
