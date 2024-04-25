import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../shared/button-large/button-large.component';

@Component({
  selector: 'app-accueil-section',
  standalone: true,
  imports: [ButtonLargeComponent],
  templateUrl: './accueil-section.component.html',
  styleUrl: './accueil-section.component.scss',
})
export class AccueilSectionComponent {
  textSavoirPlus: string = 'En savoir plus';
}
