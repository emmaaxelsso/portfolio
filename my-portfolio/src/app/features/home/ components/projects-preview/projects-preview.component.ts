import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/components/section-title/section-title.component';
import { ProjectCardComponent } from '../../../../shared/components/project-card/project-card.component';
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