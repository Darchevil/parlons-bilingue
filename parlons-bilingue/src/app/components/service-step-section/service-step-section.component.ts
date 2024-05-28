import { Component, Input } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'service-step-section',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './service-step-section.component.html',
  styleUrl: './service-step-section.component.css',
})
export class ServiceStepSectionComponent {
  constructor(private scrollService: ScrollService) {}

  @Input() stepTitle: string = 'Etape 1 : Choisissez';
  @Input() stepDesc: string = '';
  @Input() stepButtonText: string = '';
  @Input() srcImage: string = '';
  @Input() hrefSource: string = '';
  @Input() sectionSource: string = '';
  @Input() isLink = false;

  scrollToSection() {
    this.scrollService.scrollToElement(this.sectionSource);
  }
}
