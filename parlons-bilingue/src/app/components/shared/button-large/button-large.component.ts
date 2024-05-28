import { Component, Input } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'button-large',
  standalone: true,
  imports: [],
  templateUrl: './button-large.component.html',
  styleUrl: './button-large.component.css',
})
export class ButtonLargeComponent {
  constructor(private scrollService: ScrollService) {}
  @Input() textButton: string = 'Button';
  @Input() sectionSource: string = '';

  scrollToSection() {
    this.scrollService.scrollToElement(this.sectionSource);
  }
}
