import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../components/shared/button-large/button-large.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { TarifElementComponent } from '../components/shared/tarif-element/tarif-element.component';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [ButtonLargeComponent, NavigationComponent, TarifElementComponent],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css',
})
export class TarifsComponent {
  textJeMeLance: string = `C'est parti !`;
}
