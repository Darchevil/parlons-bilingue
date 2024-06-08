import { Routes } from '@angular/router';
import { TarifsComponent } from './tarifs/tarifs.component';
import { HomeComponent } from './home/home.component';
import { CgvComponent } from './cgv/cgv.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'cgv', component: CgvComponent },
  { path: ':position', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
