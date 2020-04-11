import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { EventsComponent } from './events/containers/events/events.component';
import { EventDetailsComponent } from './events/components/event-details/event-details.component';
import { EventCreateComponent } from './events/components/event-create/event-create.component';


const routes: Routes = [
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'events/new',
    component: EventCreateComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

