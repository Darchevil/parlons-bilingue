import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../components/shared/button-large/button-large.component';
import { NavigationComponent } from '../components/navigation/navigation.component';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [ButtonLargeComponent, NavigationComponent],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css',
})
export class TarifsComponent {
  textJeMeLance: string = `C'est parti !`;
}
