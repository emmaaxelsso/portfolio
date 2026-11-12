import type { Routes } from '@angular/router';

import { ResearchComponent } from './research.component';
import { ResearchDetailComponent } from './research-detail/research-detail.component';

export const researchRoutes: Routes = [
  { path: '', component: ResearchComponent, pathMatch: 'full' },
  { path: 'ai-code-quality', component: ResearchDetailComponent },
  { path: ':slug', redirectTo: '/research', pathMatch: 'full' },
];