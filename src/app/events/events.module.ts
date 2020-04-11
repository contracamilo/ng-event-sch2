import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventThumbnailComponent } from "./components/event-thumbnail/event-thumbnail.component";
import { EventsComponent } from "./containers/events/events.component";

@NgModule({
  declarations: [EventThumbnailComponent, EventsComponent],
  exports: [EventThumbnailComponent, EventsComponent],
  imports: [CommonModule],
})
export class EventsModule {}
