import type { Routes } from '@angular/router';

import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { projectsRoutes } from './features/projects/projects.routes';
import { researchRoutes } from './features/research/research.routes';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research', children: researchRoutes },
  { path: 'projects', children: projectsRoutes },
  { path: 'contact', component: ContactComponent },
];