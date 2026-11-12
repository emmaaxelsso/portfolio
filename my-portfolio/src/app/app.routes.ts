import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { ProjectDetailComponent } from './features/projects/project-detail/project-detail.component';
import { ResearchComponent } from './features/research/research.component';
import { ResearchDetailComponent } from './features/research/research-detail/research-detail.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects/:slug', component: ProjectDetailComponent},
  { path: 'research/:slug', component: ResearchDetailComponent}
];