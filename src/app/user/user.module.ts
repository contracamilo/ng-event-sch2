import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent, LoginComponent],
  exports: [ ProfileComponent, LoginComponent ],
  imports: [CommonModule, UserRoutingModule, SharedModule, CoreModule, ReactiveFormsModule],
})
export class UserModule {}
