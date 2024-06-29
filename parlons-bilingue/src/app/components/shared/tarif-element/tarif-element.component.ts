import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'tarif-element',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tarif-element.component.html',
  styleUrl: './tarif-element.component.css',
})
export class TarifElementComponent {
  constructor(private scrollService: ScrollService) {}

  @Input() name: string = 'tarif';
  @Input() prix: string = '90€/mois';
  @Input() avantage1: string = 'Formateur personnel';
  @Input() avantage2: string = 'Séances illimitées ';
  @Input() avantage3: string = 'Suivi personnalisé';
  @Input() hrefInput: string = '';
  @Input() onTop: boolean = false;
}
