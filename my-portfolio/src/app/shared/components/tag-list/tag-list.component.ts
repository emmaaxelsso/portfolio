import { Component, Input } from '@angular/core';

@Component({
  selector: 'ul[appTagList]',
  standalone: true,
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.scss',
})
export class TagListComponent {
  @Input({ required: true }) tags!: readonly string[];
}