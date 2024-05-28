import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../shared/button-large/button-large.component';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [ButtonLargeComponent],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css',
})
export class ServiceSectionComponent {
  constructor(private scrollService: ScrollService) {}

  textLance: string = 'Je me lance !';

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
  }
}
