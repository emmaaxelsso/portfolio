import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS } from '../../../core/constants/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {
  project = PROJECTS.find(
    (project) => project.slug === this.route.snapshot.paramMap.get('slug')
  );

  constructor(private route: ActivatedRoute) {}
}