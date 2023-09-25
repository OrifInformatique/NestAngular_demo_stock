import { ItemModel } from "./item-model";

export interface PaginateItemsModel {
    items: ItemModel[];
    totalItems: number;
}
