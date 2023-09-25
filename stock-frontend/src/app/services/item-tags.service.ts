import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemTagModel } from '../models/item-tag-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemTagsService {

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<ItemTagModel[]> {
    return this.http.get<ItemTagModel[]>(`${environment.apiUrl}item-tags`);
  }
}
