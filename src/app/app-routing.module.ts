import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ErrorsComponent } from './shared/components/errors/errors.component';


const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: '404',
    component: ErrorsComponent
  },
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

