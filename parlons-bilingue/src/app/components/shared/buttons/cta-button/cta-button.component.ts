import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  imports: [],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.css',
})
export class CTAButtonComponent {
  //TODO: il faudra penser aux classes à modifier pour le responsive
  @Input() textButton: string = '';
}
