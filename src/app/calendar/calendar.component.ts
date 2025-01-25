import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-calendar',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [MatFormFieldModule,  FormsModule, MatCard , ReactiveFormsModule, JsonPipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
 ngOnInit(): void {
     
 }


}

