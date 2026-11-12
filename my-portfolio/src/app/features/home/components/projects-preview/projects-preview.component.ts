import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PROJECTS } from '../../../projects/projects.data';

@Component({
  selector: 'app-projects-preview',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects-preview.component.html',
  styleUrl: './projects-preview.component.scss',
})
export class ProjectsPreviewComponent {
    readonly projects = PROJECTS.filter((project) => project.showOnHome);
}