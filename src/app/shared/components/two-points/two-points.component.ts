import { Component, inject, Input } from '@angular/core';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'cp-two-points',
  imports: [],
  templateUrl: './two-points.component.html',
  styleUrl: './two-points.component.scss'
})
export class TwoPointsComponent {
  service = inject(ColorService);

  public isOn = true;
  public countPoints = [0, 1];

  public intervalId = setInterval(() => {
    this.isOn = !this.isOn;
  }, 1000);
}
