import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../shared/button-large/button-large.component';

@Component({
  selector: 'hero-section',
  standalone: true,
  imports: [ButtonLargeComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  text: string = 'Je me lance !';
}
