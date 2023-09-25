import { ItemEntity } from "src/items/entites/item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('item_condition')
export class ItemConditionEntity {
    @PrimaryGeneratedColumn()
    item_condition_id: number;
    
    @Column()
    name: string;

    @OneToMany(() => ItemEntity, (item: ItemEntity) => item.item_condition)
    items: ItemEntity;
}
