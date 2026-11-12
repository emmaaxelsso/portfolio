import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackLinkComponent } from '../../shared/components/back-link/back-link.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, BackLinkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}