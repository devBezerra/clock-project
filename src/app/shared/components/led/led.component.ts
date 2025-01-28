import { Component, Input } from '@angular/core';

@Component({
  selector: 'cp-led',
  imports: [],
  templateUrl: './led.component.html',
  styleUrl: './led.component.scss',
})
export class LedComponent  {
  @Input() customClass: string = '';
  @Input() isOn: boolean = false;
  @Input() color: string = '#fff';
}
