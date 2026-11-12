import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';


@Component({
  selector: 'app-research-detail',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './research-detail.component.html',
  styleUrl: './research-detail.component.scss',
})
export class ResearchDetailComponent {}