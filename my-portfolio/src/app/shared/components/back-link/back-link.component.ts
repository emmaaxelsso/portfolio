import { Component, Input } from '@angular/core';

@Component({
  selector: 'a[appBackLink]',
  standalone: true,
  templateUrl: './back-link.component.html',
})
export class BackLinkComponent {
  @Input({ required: true }) label!: string;
}