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
    { name: 'toto', stars: 3, title: 'hello', description: 'on est là' },
    { name: 'titi', stars: 4, title: 'hellooo', description: 'bien joué' },
    { name: 'titi', stars: 4, title: 'hellooo', description: 'bien joué' },
    {
      name: 'tutu',
      stars: 5,
      title: 'hellooo',
      description: 'Trop Fooooort !',
    },
  ];
}
