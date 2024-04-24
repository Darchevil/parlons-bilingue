import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilSectionComponent } from './components/accueil-section/accueil-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccueilSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'parlons-bilingue';
}
