import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DigitComponent } from "./modules/digit/digit.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DigitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clock-project';
}
