import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';

import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventsComponent } from './containers/events/events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { RouteGuard } from '../route.guard';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    EventThumbnailComponent,
    EventsComponent,
    EventDetailsComponent,
    EventCreateComponent,
  ],
  exports: [EventThumbnailComponent, EventsComponent, EventDetailsComponent, EventCreateComponent],
  imports: [CommonModule, SharedModule, CoreModule, EventsRoutingModule],
  providers: [
    RouteGuard,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
  ],
})
export class EventsModule {}

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty){
    return window.confirm('you have not saved this event, do yo really want to cancel?');
  }
  return true;
}
