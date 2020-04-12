import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/event/events.service';
import { ToastrService } from 'src/app/core/services/toastr/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  events: IEvent[];
  constructor(
    private eventsService: EventsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    /*
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
    });*/
    console.log(this.route.snapshot.data.events);
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
