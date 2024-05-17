import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccueilSectionComponent } from './components/accueil-section/accueil-section.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServiceStepSectionComponent } from './components/service-step-section/service-step-section.component';
import { AboutComponent } from './components/about/about.component';

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
    AboutComponent,
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
  imgSrc2: string = '../../../assets/imgs/step2.png';
  titleStep2: string = 'Etape 2 : Planifiez vos séances';
  descStep2: string =
    "Planifiez selon vos disponibilités du lundi au samedi jusqu'à 6h avant le rdv.";
  textStepButton2: string = 'Je planifie';
  imgSrc3: string = '../../../assets/imgs/step3.png';
  titleStep3: string = 'Etape 3 : Connectez-vous';
  descStep3: string =
    'Cliquez sur le lien zoom reçu par email afin de vous connecter à la séance.';
  textStepButton3: string = 'Je télécharge zoom';
}
