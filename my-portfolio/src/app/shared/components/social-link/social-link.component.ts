import { Component, Input } from '@angular/core';
import { siGitlab } from 'simple-icons';

const socialProfiles = {
  github: {
    label: 'GitHub',
    url: 'https://github.com/emmaaxelsso',
  },
  linkedin: {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/emma-axelsson-3b94a416a',
  },
  gitlab: {
    label: 'Chalmers GitLab',
    url: 'https://git.chalmers.se/emmaaxe',
    iconPath: siGitlab.path,
  },
} as const;

@Component({
  selector: 'app-social-link',
  standalone: true,
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.scss',
})
export class SocialLinkComponent {
  @Input({ required: true }) platform!: keyof typeof socialProfiles;
  @Input() appearance: 'light' | 'hero' = 'light';

  protected readonly profiles = socialProfiles;
}