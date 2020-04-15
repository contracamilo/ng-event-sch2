import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NavComponent } from './components/nav/nav.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { CoreModule } from '../core/core.module';
import { AuthService } from '../core/services/auth/auth.service';



@NgModule({
  declarations: [NavComponent, ErrorsComponent],
  exports: [NavComponent, ErrorsComponent],
  imports: [CommonModule, SharedRoutingModule, CoreModule,  ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
