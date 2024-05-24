import { Component, Input } from '@angular/core';

@Component({
  selector: 'tarif',
  standalone: true,
  imports: [],
  templateUrl: './tarif-element.component.html',
  styleUrl: './tarif-element.component.css',
})
export class TarifElementComponent {
  @Input() name: string = 'tarif';
  @Input() prix: string = '90€/mois';
  @Input()
  description: string = `✔️Votre formateur personnel 
  ✔️ séances illimitées sur zoom
  ✔️Suivi personnalisé`;
}
