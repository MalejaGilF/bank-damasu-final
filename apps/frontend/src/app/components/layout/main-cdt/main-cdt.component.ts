import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';

@Component({
  selector: 'bank-damasu-main-cdt',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './main-cdt.component.html',
  styleUrl: './main-cdt.component.scss',
})
export class MainCdtComponent {
  constructor(private router: Router) {}
  onNavigate() {
    this.router.navigate(['/CDT/personal-info']);
  }
}
