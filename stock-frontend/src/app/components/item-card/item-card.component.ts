import { Component, Input } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css'],
})
export class ItemCardComponent {
  @Input() item?: ItemModel;

  handleMissingImage(event: any) {
    (event.target as HTMLImageElement).src = '/assets/images/no_image.png';
  }
}
