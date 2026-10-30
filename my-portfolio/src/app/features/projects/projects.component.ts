import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { PROJECTS } from '../../core/constants/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}