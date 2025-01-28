import { Component } from '@angular/core';
import { DigitComponent } from '../digit/digit.component';
import { TwoPointsComponent } from "../../shared/components/two-points/two-points.component";

@Component({
  selector: 'app-timer',
  imports: [DigitComponent, TwoPointsComponent],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  public ten = 2;
  public unit = 5;

  public intervalId = setInterval(() => {
    if (this.unit > 0) {
      this.unit--;
    } else {
      if (this.ten !== 0) {
        this.ten--;
        this.unit = 9;
      } else {
        clearInterval(this.intervalId);
      }
    }
  }, 1000);
}
