import { Component, Input } from '@angular/core';

@Component({
  selector: 'temoignage-card',
  standalone: true,
  imports: [],
  templateUrl: './temoignage-card.component.html',
  styleUrl: './temoignage-card.component.css',
})
export class TemoignageCardComponent {
  @Input() name: string = '';
  @Input() stars: number = 0;
  @Input() title: string = '';
  @Input() description: string = '';
}
