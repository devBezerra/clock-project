import { Component, inject, Input } from '@angular/core';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'cp-led',
  imports: [],
  templateUrl: './led.component.html',
  styleUrl: './led.component.scss',
})
export class LedComponent {
  service = inject(ColorService);

  @Input() customClass: string = '';
  @Input() isOn: boolean = false;
}
