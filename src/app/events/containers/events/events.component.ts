import { Component, OnInit } from "@angular/core";
import { EventsService } from "src/app/core/services/event/events.service";
import { ToastrService } from "src/app/core/services/toastr/toastr.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
})
export class EventsComponent implements OnInit {
  events: any[];
  constructor(
    private eventsService: EventsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
