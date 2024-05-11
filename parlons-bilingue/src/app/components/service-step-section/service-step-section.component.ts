import { Component, Input } from '@angular/core';

@Component({
  selector: 'service-step-section',
  standalone: true,
  imports: [],
  templateUrl: './service-step-section.component.html',
  styleUrl: './service-step-section.component.css',
})
export class ServiceStepSectionComponent {
  @Input() stepTitle: string = 'Etape 1 : Choisissez';
  @Input() stepDesc: string = '';
  @Input() stepButtonText: string = '';
  @Input() srcImage: string = '';
}
