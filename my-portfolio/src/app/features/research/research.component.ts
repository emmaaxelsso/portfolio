import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './research.component.html',
})
export class ResearchComponent {}