import { Component, Input } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
    @Input() items: ItemModel[] = [];
}
