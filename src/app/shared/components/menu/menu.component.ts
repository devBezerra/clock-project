import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuInterface } from '../../interfaces/menu.interface';
import { RouterModule } from '@angular/router';
import { ColorService } from '../../../services/color.service';

@Component({
  selector: 'cp-menu',
  imports: [ButtonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  service = inject(ColorService);

  protected menus: MenuInterface[] = [{
    name: "Relógio",
    url: "/",
    icon: "pi pi-clock"
  },
  {
    name: "Timer",
    url: "/timer",
    icon: "pi pi-hourglass"
  },
  {
    name: "Cronômetro",
    url: "/",
    icon: "pi pi-stopwatch"
  }]

}
