import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsService } from './services/event/events.service';
import { ToastrService } from './services/toastr/toastr.service';
import { EventListResolverService } from './services/event-list-resolver/event-list-resolver.service';
import { AuthService } from './services/auth/auth.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EventsService,
    ToastrService,
    EventListResolverService,
    AuthService
  ]
})
export class CoreModule { }
