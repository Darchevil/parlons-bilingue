import { Component } from '@angular/core';
import { ButtonLargeComponent } from '../components/shared/button-large/button-large.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { TarifElementComponent } from '../components/shared/tarif-element/tarif-element.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tarifs',
  standalone: true,
  imports: [ButtonLargeComponent, NavigationComponent, TarifElementComponent],
  templateUrl: './tarifs.component.html',
  styleUrl: './tarifs.component.css',
})
export class TarifsComponent {
  textJeMeLance: string = `C'est parti !`;
  sectionSourceTarifMsg = 'messageTarif';
  etudiant: string = 'Illimité - étudiant';
  tarifEtudiant: string = '90€/mois';
  illimite: string = 'Illimité - plein tarif';
  tarifIllimite: string = '120€/mois';
  surMesure: string = 'Sur-mesure';
  tarifSurMesure: string = '35€/2 séances';
  avantage2SurMesure: string = 'Séances prédéfinies sur ZOOM';
}
