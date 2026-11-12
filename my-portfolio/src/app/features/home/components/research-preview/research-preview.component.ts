import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-research-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './research-preview.component.html',
  styleUrl: './research-preview.component.scss',
})
export class ResearchPreviewComponent {}