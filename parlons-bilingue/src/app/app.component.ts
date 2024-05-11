import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilSectionComponent } from './components/accueil-section/accueil-section.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServiceStepSectionComponent } from './components/service-step-section/service-step-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccueilSectionComponent,
    NavigationComponent,
    ServiceSectionComponent,
    HeroSectionComponent,
    ServiceStepSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'parlons-bilingue';
  imgSrc1: string = '../../../assets/imgs/step1.png';
  titleStep1: string = 'Etape 1 : Choisissez';
  descStep1: string =
    'Choisissez l’offre qui vous convient parmis l’offre étudiante, bilingue et sur-mesure';
  textStepButton1: string = 'Les tarifs';
  imgSrc2: string = '../../../assets/imgs/step2.png'; //FIX : L'image n'est pas prise en compte
  titleStep2: string = 'Etape 2 : Planifiez';
  descStep2: string =
    'Choisissez l’offre qui vous convient parmis l’offre étudiante, bilingue et sur-mesure';
  textStepButton2: string = 'Les tarifs';
  imgSrc3: string = '../../../assets/imgs/step3.png';
  titleStep3: string = 'Etape 3 : Connectez-vous';
  descStep3: string =
    'Choisissez l’offre qui vous convient parmis l’offre étudiante, bilingue et sur-mesure';
  textStepButton3: string = 'Les tarifs';
}
