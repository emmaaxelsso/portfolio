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
export class ContactComponent {
  readonly email = 'emmaaxelsson.ax@gmail.com';
  copyStatus = '';
  private copyStatusTimer?: ReturnType<typeof setTimeout>;

  async copyEmail(): Promise<void> {
    clearTimeout(this.copyStatusTimer);
    this.copyStatus = '';

    try {
      await navigator.clipboard.writeText(this.email);
      this.copyStatus = '✓ Copied!';

      this.copyStatusTimer = setTimeout(() => {
        this.copyStatus = '';
      }, 3000);
    } catch {
      this.copyStatus = 'Couldn’t copy. Select the address to copy it manually.';
    }
  }
}