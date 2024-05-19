import { Component } from '@angular/core';
import { TemoignageCardComponent } from '../shared/temoignage-card/temoignage-card.component';
import Temoignage from '../../models/temoignage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'temoignages',
  standalone: true,
  imports: [TemoignageCardComponent, CommonModule],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css',
})
export class TemoignagesComponent {
  temoignageCardList: Temoignage[] = [
    { name: 'toto', stars: 3, title: 'hello', description: 'on est là' },
    { name: 'titi', stars: 4, title: 'hellooo', description: 'bien joué' },
    {
      name: 'tutu',
      stars: 5,
      title: 'hellooo',
      description: 'Trop Fooooort !',
    },
  ];
}
