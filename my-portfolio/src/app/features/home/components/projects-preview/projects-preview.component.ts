import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PROJECTS } from '../../../../core/constants/projects.data';

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.scss'
})
export class ProjectsPreviewComponent {
  projects = PROJECTS;

  constructor(private router: Router) {}

  goToProject(slug: string) {
    console.log('clicked project:', slug);
    this.router.navigate(['/projects', slug]);
  }
}