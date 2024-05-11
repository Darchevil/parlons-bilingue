import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilSectionComponent } from './components/accueil-section/accueil-section.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccueilSectionComponent,
    NavigationComponent,
    ServiceSectionComponent,
    HeroSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'parlons-bilingue';
}
