import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutPreviewComponent } from './components/about-preview/about-preview.component';
import { ProjectsPreviewComponent } from "./components/projects-preview/projects-preview.component";
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutPreviewComponent, ProjectsPreviewComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}