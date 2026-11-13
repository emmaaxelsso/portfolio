import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackLinkComponent } from '../../shared/components/back-link/back-link.component';
import { educationCourses } from './about.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, BackLinkComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly educationCourses = educationCourses;
}