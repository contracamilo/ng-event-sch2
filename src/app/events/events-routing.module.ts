import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './containers/events/events.component';

import { EventDetailsComponent } from './components/event-details/event-details.component';
import { EventCreateComponent } from './components/event-create/event-create.component';
import { RouteGuard } from '../route.guard';
import { EventListResolverService } from '../core/services/event-list-resolver/event-list-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    resolve: {events: EventListResolverService }
  },
  {
    path: 'events/new',
    canDeactivate: ['canDeactivateCreateEvent'],
    component: EventCreateComponent
  },
  {
    path: 'events/:id',
    canActivate: [RouteGuard],
    component: EventDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {}
