import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ContactComponent } from '../components/contact/contact.component';
import { TemoignagesComponent } from '../components/temoignages/temoignages.component';
import { AboutComponent } from '../components/about/about.component';
import { ServiceStepSectionComponent } from '../components/service-step-section/service-step-section.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { ServiceSectionComponent } from '../components/service-section/service-section.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { AccueilSectionComponent } from '../components/accueil-section/accueil-section.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AccueilSectionComponent,
    NavigationComponent,
    ServiceSectionComponent,
    HeroSectionComponent,
    ServiceStepSectionComponent,
    AboutComponent,
    TemoignagesComponent,
    ContactComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}
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

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
