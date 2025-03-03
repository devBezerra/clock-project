import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  color = signal<string>("#fff");

  setColor(newColor: string): void {
    this.color.set(newColor);
  }
}
