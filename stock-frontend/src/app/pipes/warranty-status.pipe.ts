import { Pipe, PipeTransform } from '@angular/core';
import { ItemModel } from '../models/item-model';

@Pipe({
  name: 'warrantyStatus'
})
export class WarrantyStatusPipe implements PipeTransform {

  transform(item: ItemModel): string {
    const label: string = 'Durée de la garantie&nbsp;:';
    const warrantyDuration: string = '&nbsp;' + item.warranty_duration + '&nbsp;mois'
    let warrantyStatus: string = '-';

    if (item.warranty_duration == 0 || new Date(item.buying_date!) == new Date('1899-11-29')) {
      return label + '<br>' + warrantyStatus;
    } else {
      if (item.buying_date !== null && item.warranty_duration !== null) {
        
        const buyingDate: Date = new Date(item.buying_date);
        const currentDate: Date = new Date();

        const yearDiff = currentDate.getFullYear() - buyingDate.getFullYear();
        const monthDiff = currentDate.getMonth() - buyingDate.getMonth();

        const monthSpent = yearDiff * 12 + monthDiff;

        const warrantyLeft = item.warranty_duration - monthSpent;

        if (warrantyLeft > 3) {
          warrantyStatus = '<span class="badge bg-success">Sous garantie</span>';
        } else if (warrantyLeft > 0) {
          warrantyStatus = '<span class="badge bg-warning">Échéance proche</span>';
        } else {
          warrantyStatus = '<span class="badge bg-danger">Garantie expirée</span>';
        }
      }

      return label + warrantyDuration + warrantyStatus;
    }
  }

}
