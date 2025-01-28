import { Component, EventEmitter, Output } from '@angular/core';
import { Colors } from '../../constants/colors';

@Component({
  selector: 'cp-color-buttons',
  imports: [],
  templateUrl: './color-buttons.component.html',
  styleUrl: './color-buttons.component.scss'
})
export class ColorButtonsComponent {
  @Output() colorSelected = new EventEmitter<string>();

  public colors: Array<any> = Colors;

  selectColor(hex: string): void {
    this.colorSelected.emit(hex);
  }
}
