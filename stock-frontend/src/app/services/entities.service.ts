import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityModel } from '../models/entity-model';

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  constructor(private readonly http: HttpClient) { }

  getAll(archived: boolean): Observable<EntityModel[]> {
    return this.http.get<EntityModel[]>(`${environment.apiUrl}entities/${Number(archived)}`);
  }
}
