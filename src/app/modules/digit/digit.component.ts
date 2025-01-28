import { Component, Input } from '@angular/core';
import { LedComponent } from '../../shared/components/led/led.component';
import { dictionary } from '../../shared/constants/dictionary';

@Component({
  selector: 'cp-digit',
  imports: [LedComponent],
  templateUrl: './digit.component.html',
  styleUrl: './digit.component.scss',
})
export class DigitComponent {
  @Input() digit = 0;
  @Input() color: string = '#fff'; 
  
  public dictionary = dictionary;
}
