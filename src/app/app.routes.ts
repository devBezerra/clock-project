import { Routes } from '@angular/router';
import { ClockComponent } from './modules/clock/clock.component';
import { TimerComponent } from './modules/timer/timer.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: ClockComponent
  },
  {
    path: "timer",
    component: TimerComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
