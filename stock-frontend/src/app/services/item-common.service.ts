import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ItemCommonModel } from '../models/item-common-model';

@Injectable({
  providedIn: 'root'
})
export class ItemCommonService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getById(id: number): Observable<ItemCommonModel> {
    return this.http.get<ItemCommonModel>(`${environment.apiUrl}item-commons/${id}`);
  }
}
