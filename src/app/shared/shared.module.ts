import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';

import { NavComponent } from './components/nav/nav.component';
import { ErrorsComponent } from './components/errors/errors.component';



@NgModule({
  declarations: [NavComponent, ErrorsComponent],
  exports: [NavComponent, ErrorsComponent],
  imports: [CommonModule, SharedRoutingModule],
})
export class SharedModule {}
