import type { Routes } from '@angular/router';

import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectsComponent } from './projects.component';

export const projectsRoutes: Routes = [
  { path: '', component: ProjectsComponent, pathMatch: 'full' },
  { path: ':slug', component: ProjectDetailComponent },
];