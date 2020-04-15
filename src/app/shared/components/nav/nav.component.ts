import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  userName: string;
  constructor(public auth: AuthService) { }

  ngOnInit(){
    this.userName = localStorage.getItem('name').toUpperCase();
  }

  isLoged() {
    const value = localStorage.getItem('loged');
    if (value === 'true') {
      return true;
    }
    return false;
  }

  logOut(){
    localStorage.removeItem('loged');
    localStorage.removeItem('name');
  }
}

