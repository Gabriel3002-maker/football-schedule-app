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

    const url = 'https://api.openligadb.de/getmatchdata/bl1';

    console.log('Consumiendo servicio: getCurrentSeasonSchedule');
    console.log('URL:', url);

    return this.http.get(url).pipe(
      catchError(this.handleError)
    )
  }

  getCurrentSeasonScheduleByFilter(year: string, month: string): Observable<any> {
    const url = `https://api.openligadb.de/getmatchdata/bl1/${year}/${month}`;
  
    console.log('Consumiendo servicio: getCurrentSeasonSchedule');
    console.log('URL:', url);
  
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  
 

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    console.log('Ocurrió un error en la solicitud.');
    return throwError('Something bad happened; please try again later.');
  }
}
