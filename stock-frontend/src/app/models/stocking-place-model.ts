export interface StockingPlaceModel {
    stocking_place_id: number
    name: string;
    short: string;
    archive: Date | null;
    fk_entity_id: number;
}
