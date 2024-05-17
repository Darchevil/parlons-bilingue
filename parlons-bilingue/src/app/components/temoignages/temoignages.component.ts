import { Component } from '@angular/core';
import { TemoignageCardComponent } from '../shared/temoignage-card/temoignage-card.component';

@Component({
  selector: 'temoignages',
  standalone: true,
  imports: [TemoignageCardComponent],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css',
})
export class TemoignagesComponent {}
