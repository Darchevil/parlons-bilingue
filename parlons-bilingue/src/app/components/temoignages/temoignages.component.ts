import { Component } from '@angular/core';
import { TemoignageCardComponent } from '../shared/temoignage-card/temoignage-card.component';
import Temoignage from '../../models/temoignage';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'temoignages',
  standalone: true,
  imports: [CommonModule, TemoignageCardComponent, NgxPaginationModule],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css',
  animations: [
    trigger('listAnimation', [
      transition(':increment', [
        // Initial state of new page
        style({ opacity: 0, transform: 'translateX(100%)' }),
        // Final state after transition
        animate('500ms', style({ opacity: 1, transform: 'translateX(0%)' })),
      ]),
      transition(':decrement', [
        // Initial state of new page
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        // Final state after transition
        animate('500ms', style({ opacity: 1, transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class TemoignagesComponent {
  p: number = 1;
  suivant: string = 'suivant';
  precedent: string = 'précédent';
  temoignageCardList: Temoignage[] = [
    {
      name: 'Cassandra K.',
      stars: 5,
      title: 'la progression est rapide sans l’impression de se sentir noyé',
      description: `Je trouve la méthode excellente, la progression est rapide sans l’impression de se sentir noyé. L’ambiance des cours est conviviale. J’ai beaucoup aimé le professionnalisme et l’implication d’Eddy durant les cours. Il y a un réel échange entre le professeur et l’élève.`,
    },
    {
      name: 'Emerick A.',
      stars: 4,
      title: `Vraiment à l'écoute et excellente manière d'enseigner !`,
      description: `Grâce à la formation proposée par Parlonsbilingue.com, j’ai pu retrouver un bon niveau en anglais. Avec des sessions d’anglais de 30 minutes tous les jours, cela rends le travail d’apprentissage et de perfectionnement bien plus ludique et éducatif que de grosses sessions de cours dispatchées dans la semaine. De plus le formateur, Eddy, a vraiment été à l’écoute de mes attentes et a une excellente manière d'enseigner. Je recommande grandement !`,
    },
    {
      name: 'Camille P.',
      stars: 5,
      title: `Je suis désormais plus confiante avec mon anglais.`,
      description: `J'ai eu de mauvaises expériences à l'école avec l'anglais mais grâce à mon expérience avec Eddy, cette peur a complètement disparu. Son approche bienveillante et encourageante m'a permis de me sentir à l'aise dès le premier jour. Ses explications claires et sa patience ont fait toute la différence. Je suis désormais plus confiante avec mon anglais, et je suis reconnaissante envers Eddy pour avoir transformé mon attitude envers l'apprentissage de l'anglais.`,
    },
  ];
}
