import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventThumbnailComponent } from "./components/event-thumbnail/event-thumbnail.component";
import { EventsComponent } from "./containers/events/events.component";
import { EventDetailsComponent } from "./components/event-details/event-details.component";
import { AppRoutingModule } from '../app-routing.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventCreateComponent } from './components/event-create/event-create.component';

@NgModule({
  declarations: [
    EventThumbnailComponent,
    EventsComponent,
    EventDetailsComponent,
    EventCreateComponent,
  ],
  exports: [EventThumbnailComponent, EventsComponent, EventDetailsComponent, EventCreateComponent],
  imports: [CommonModule, AppRoutingModule, EventsRoutingModule],
})
export class EventsModule {}
