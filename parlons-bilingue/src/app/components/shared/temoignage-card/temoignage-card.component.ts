import { Component, Input } from '@angular/core';
import Temoignage from '../../../models/temoignage';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'temoignage-card',
  standalone: true,
  imports: [StarRatingComponent, CommonModule],
  templateUrl: './temoignage-card.component.html',
  styleUrl: './temoignage-card.component.css',
})
export class TemoignageCardComponent {
  @Input() temoignageCardInput: Temoignage = new Temoignage('', 0, '', '');
  temoignageCard: Temoignage = new Temoignage(
    'Kassandra',
    5,
    `la progression est rapide sans l’impression de se sentir noyé`,
    `Je trouve la méthode excellente, la progression est rapide sans
  l’impression de se sentir noyé. L’ambiance des cours est conviviale. J’ai
  beaucoup aimé le professionnalisme et l’implication d’Eddy durant les cours.
  Il y’a un réel échange entre le professeur et l’élève.`
  );
}
