import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/core/services/event/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(private eventsService: EventsService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params.id);
    this.event = this.eventsService.getEvent(id);
  }
}
