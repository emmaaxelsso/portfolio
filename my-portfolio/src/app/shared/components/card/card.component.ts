import { Component } from '@angular/core';

@Component({
  selector: 'a[appCard], article[appCard]',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {}