import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19 Tutorial';
}
