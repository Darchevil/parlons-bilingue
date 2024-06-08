import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../shared/button-large/button-large.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'hero-section',
  standalone: true,
  imports: [ButtonLargeComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  constructor(private scrollService: ScrollService) {}
  text: string = 'Je me lance !';

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
  }
}
