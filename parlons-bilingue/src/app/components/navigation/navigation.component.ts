import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  isFixed: boolean = false;
  @Input() isTarif: boolean = false;

  constructor(private router: Router, private scrollService: ScrollService) {}

  goToTarifs() {
    this.router.navigate(['tarifs']);
  }

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
  }
}
