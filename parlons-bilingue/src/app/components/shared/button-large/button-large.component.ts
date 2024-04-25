import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-large',
  standalone: true,
  imports: [],
  templateUrl: './button-large.component.html',
  styleUrl: './button-large.component.css',
})
export class ButtonLargeComponent {
  @Input() textButton: string = 'Button';
}
