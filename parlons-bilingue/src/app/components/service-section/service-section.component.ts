import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../shared/button-large/button-large.component';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [ButtonLargeComponent],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css',
})
export class ServiceSectionComponent {
  textLance: string = 'Je me lance !';
}
