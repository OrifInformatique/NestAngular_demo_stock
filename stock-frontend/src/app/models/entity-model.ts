export interface EntityModel {
    entity_id: number;
    name: string;
    address: string;
    zip: string;
    locality: string;
    shortname: string | null;
    archive: Date | null;
}
