import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import data from '../_data/inmates.json';
import { mapDataToApi, mapInmates } from '../_helpers';
import { Inmate, InmateApi } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class InmateService {
  private _inmateData: InmateApi[] = [...data.data];

  constructor() {}

  /**
   * Fetch Inmate data from the API and return it to the frontend
   */
  public getInmates(): Observable<Inmate[]> {
    return of(this._inmateData).pipe(mapInmates);
  }

  /**
   * Check a new inmate into the system
   * @param inmate {Inmate}
   */
  public checkIn(inmate: Inmate): Observable<{ message: string }> {
    this._inmateData.push(mapDataToApi(inmate));

    return of({ message: 'Success' }).pipe(delay(500));
  }
}
