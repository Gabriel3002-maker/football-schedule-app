import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon'; 
import { CalendarComponent } from './calendar/calendar.component';
import { TargetComponent } from './target/target.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, MatIconModule, CalendarComponent, TargetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'football-schedule-app';
}
