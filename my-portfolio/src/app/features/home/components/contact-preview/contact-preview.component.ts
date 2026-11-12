import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact-preview.component.html',
  styleUrl: './contact-preview.component.scss',
})
export class ContactPreviewComponent {}