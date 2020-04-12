import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouteGuard } from './route.guard';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    SharedModule,
    CoreModule,
    UserModule
  ],
  providers: [ RouteGuard ],
  bootstrap: [AppComponent],
})
export class AppModule {}