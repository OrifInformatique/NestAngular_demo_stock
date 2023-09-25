import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StockingPlaceModel } from '../models/stocking-place-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockingPlacesService {

  constructor(private readonly http: HttpClient) { }

  getByEntityId(entityId: number): Observable<StockingPlaceModel[]> {
    return this.http.get<StockingPlaceModel[]>(`${environment.apiUrl}stocking-places/${entityId}/entity`);
  }
}
