import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToProjects(): void {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  }
}