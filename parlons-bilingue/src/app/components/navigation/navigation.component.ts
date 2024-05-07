import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  isFixed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isFixed = window.scrollY > 0;
  }
}
