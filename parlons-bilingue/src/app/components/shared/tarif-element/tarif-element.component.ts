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
  @Input() avantage1: string = 'Votre formateur personnel';
  @Input() avantage2: string = 'Séances illimitées sur zoom';
  @Input() avantage3: string = 'Suivi personnalisé';
  @Input() onTop: boolean = false;

  scrollToSection(id: string) {
    this.scrollService.scrollToElement(id);
  }
}
