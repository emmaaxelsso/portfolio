import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../../../../core/constants/projects.data';

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.scss'
})
export class ProjectsPreviewComponent {
  projects = PROJECTS;
}