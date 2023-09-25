import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ItemModel } from '../models/item-model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PaginateItemsModel } from '../models/paginate-items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getFiltered(page: number, filters: string): Observable<PaginateItemsModel> {
    return this.http.get<PaginateItemsModel>(`${environment.apiUrl}items/${page}?${filters}`);
  }

  getById(id: number): Observable<ItemModel> {
    return this.http.get<ItemModel>(`${environment.apiUrl}items/${id}`);
  }
}
