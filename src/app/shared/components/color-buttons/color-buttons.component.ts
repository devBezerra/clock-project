import { Component, inject } from '@angular/core';
import { Colors } from '../../constants/colors';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'cp-color-buttons',
  imports: [],
  templateUrl: './color-buttons.component.html',
  styleUrl: './color-buttons.component.scss'
})
export class ColorButtonsComponent {
  public colors: Array<any> = Colors;

  service = inject(ColorService);

  selectColor(hex: string): void {
    this.service.setColor(hex);
    document.documentElement.style.setProperty('--led-color', hex);
  }
}
