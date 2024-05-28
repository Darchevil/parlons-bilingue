import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
  }
}
