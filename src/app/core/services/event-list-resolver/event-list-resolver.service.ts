import { Injectable } from '@angular/core';
import { EventsService } from '../event/events.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService {

  constructor(private eventsService: EventsService) { }

  resolve() {
    return this.eventsService.getEvents().pipe(
      map(events => events)
    );
  }
}
