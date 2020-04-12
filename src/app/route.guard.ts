import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventsService } from './core/services/event/events.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private eventsService: EventsService, private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
    const id = Number(next.params.id);
    const eventExist = !!this.eventsService.getEvent(id);
    if (!eventExist) {
      this.router.navigate(['/404']);
    }
    return eventExist;
  }
}

