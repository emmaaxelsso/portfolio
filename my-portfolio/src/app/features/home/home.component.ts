import { Component } from '@angular/core';
import { HeroComponent } from './ components/hero/hero.component';
import { AboutPreviewComponent } from './ components/about-preview/about-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}