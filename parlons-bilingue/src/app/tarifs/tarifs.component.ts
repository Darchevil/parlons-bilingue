import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../components/shared/button-large/button-large.component';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [ButtonLargeComponent],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css',
})
export class TarifsComponent {
  textJeMeLance: string = 'Je me lance !';
}
