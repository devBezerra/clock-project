import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-two-points',
  imports: [],
  templateUrl: './two-points.component.html',
  styleUrl: './two-points.component.scss'
})
export class TwoPointsComponent {
  @Input() color: string = '#fff'; 
  
  public isOn = true;
  public countPoints = [0, 1];

  public intervalId = setInterval(() => {
    this.isOn = !this.isOn;
  }, 1000);
}
