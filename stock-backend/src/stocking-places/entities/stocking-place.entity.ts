import { ItemEntity } from "src/items/entites/item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('stocking_place')
export class StockingPlaceEntity {
    @PrimaryGeneratedColumn()
    stocking_place_id: number;

    @Column()
    name: string;

    @Column()
    short: string;

    @Column()
    archive: Date | null;

    @Column()
    fk_entity_id: number;

    @OneToMany(() => ItemEntity, (item: ItemEntity) => item.stocking_place)
    item_commons: ItemEntity;
}
