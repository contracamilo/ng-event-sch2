import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsService } from './services/event/events.service';
import { ToastrService } from './services/toastr/toastr.service';
import { EventListResolverService } from './services/event-list-resolver/event-list-resolver.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EventsService,
    ToastrService,
    EventListResolverService
  ]
})
export class CoreModule { }
