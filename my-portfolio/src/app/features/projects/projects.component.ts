import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS } from './projects.data';
import { CardComponent } from '../../shared/components/card/card.component';
import { TagListComponent } from '../../shared/components/tag-list/tag-list.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, CardComponent, TagListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}