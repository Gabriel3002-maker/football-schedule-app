import { Component, OnInit } from '@angular/core';
import { CurrentSeasonScheduleService } from '../../services/current-season-schedule.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [  CommonModule , MatCardModule , ScrollingModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent implements OnInit {
  constructor(
    private  currentSeasonService : CurrentSeasonScheduleService
  ){
  }

  data: any;
  ngOnInit(): void {
    this.currentSeasonService.getCurrentSeasonSchedule().subscribe(
      (data: any) => {
        console.log(data);
        this.data = data
        console.log(this.data);

      },
      (error: any) => {
        console.error('Error al obtener la respuesta del servicio:', error);
      }
    );
  }


}
