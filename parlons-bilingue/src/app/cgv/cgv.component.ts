import { Component } from '@angular/core';
import { NavigationComponent } from '../components/navigation/navigation.component';

@Component({
  selector: 'app-cgv',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './cgv.component.html',
  styleUrl: './cgv.component.css',
})
export class CgvComponent {}
