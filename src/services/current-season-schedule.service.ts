import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentSeasonScheduleService {

  constructor(
    private  http :HttpClient
  ) { }


  getCurrentSeasonSchedule(): Observable<any> {

    const url = '/api/ufl/trial/v7/en/games/current_season/schedule.json?api_key=KHkBgkXXBP8AP8kFcnfvC96EUumYvvvya1rqTdAS';

    console.log('Consumiendo servicio: getCurrentSeasonSchedule');
    console.log('URL:', url);

    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    console.log('Ocurrió un error en la solicitud.');
    return throwError('Something bad happened; please try again later.');
  }
}
