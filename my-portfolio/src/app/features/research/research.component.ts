import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CardComponent } from '../../shared/components/card/card.component';
import { TagListComponent } from '../../shared/components/tag-list/tag-list.component';
import { RESEARCH_STUDIES } from './research.data';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [RouterLink, CardComponent, TagListComponent],
  templateUrl: './research.component.html',
  styleUrl: './research.component.scss',
})
export class ResearchComponent {
  readonly studies = RESEARCH_STUDIES;
}