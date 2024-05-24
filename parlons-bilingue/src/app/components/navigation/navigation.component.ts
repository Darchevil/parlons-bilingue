import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  isFixed: boolean = false;

  constructor(private router: Router) {}

  goToTarifs() {
    this.router.navigate(['tarifs']);
  }
}
