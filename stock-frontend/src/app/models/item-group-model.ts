import { EntityModel } from "./entity-model";

export interface ItemGroupModel {
    item_group_id: number;
    name: string;
    short_name: string;
    archive: Date | null;
    entity: EntityModel;
}
