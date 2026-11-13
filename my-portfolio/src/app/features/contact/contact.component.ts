import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackLinkComponent } from '../../shared/components/back-link/back-link.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { SocialLinkComponent } from '../../shared/components/social-link/social-link.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, BackLinkComponent, CardComponent, SocialLinkComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}