import { Component } from '@angular/core';
import { DigitComponent } from '../digit/digit.component';
import { TwoPointsComponent } from '../../shared/components/two-points/two-points.component';
import { ColorButtonsComponent } from '../../shared/components/color-buttons/color-buttons.component';

@Component({
  selector: 'app-clock',
  imports: [DigitComponent, TwoPointsComponent, ColorButtonsComponent],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent {
  public tenHours: number = 0;
  public hour: number = 0;
  public tenMinute: number = 0;
  public minute: number = 0;
  public tenSecond: number = 0;
  public second: number = 0;

  selectedColor: string = '#fff';

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    this.second = seconds % 10;
    if (this.second === 0 || this.tenSecond === 0) {
      this.tenSecond = Math.floor(seconds / 10);
    }

    if (this.minute === 0 || (this.tenSecond === 0 && this.second === 0)) {
      const minutes = now.getMinutes();
      this.tenMinute = Math.floor(minutes / 10);
      this.minute = minutes % 10;
    }

    if (this.hour === 0 || (this.tenMinute === 0 && this.minute === 0)) {
      const hour = now.getHours();
      this.tenHours = Math.floor(hour / 10);
      this.hour = hour % 10;
    }
  }


  changeColor(color: string) {
    this.selectedColor = color;
  }
}
