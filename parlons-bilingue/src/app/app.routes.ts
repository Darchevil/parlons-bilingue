import { Routes } from '@angular/router';
import { TarifsComponent } from './tarifs/tarifs.component';
import { HomeComponent } from './home/home.component';
import { CgvComponent } from './cgv/cgv.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarifs', component: TarifsComponent },
  { path: 'cgv', component: CgvComponent },
  { path: ':position', component: HomeComponent },
];
