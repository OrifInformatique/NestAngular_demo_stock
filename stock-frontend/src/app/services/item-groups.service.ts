import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemGroupModel } from '../models/item-group-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemGroupsService {

  constructor(private readonly http: HttpClient) { }

  getByEntityId(entityId: number): Observable<ItemGroupModel[]> {
    return this.http.get<ItemGroupModel[]>(`${environment.apiUrl}item-groups/${entityId}/entity`);
  }
}
