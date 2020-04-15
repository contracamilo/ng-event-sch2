import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
    this.buildForm();
  }

  login(event: Event) {
    event.preventDefault();
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      const value = this.loginForm.value;
      this.authService.loginUser( value.userName,  value.password);
      this.router.navigate(['events']);
    }
  }

  cancel(){
    this.router.navigate(['events']);
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
