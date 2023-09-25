import { ItemCommonEntity } from "src/item-commons/entities/item-common.entity";
import { ItemTagEntity } from "src/item-tags/entities/item-tag.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('item_tag_link')
export class ItemTagLinkEntity {
    @PrimaryGeneratedColumn()
    item_tag_link_id: number;

    @ManyToOne(() => ItemTagEntity, (itemTag: ItemTagEntity) => itemTag.item_tag_links)
    @JoinColumn({ name: 'item_tag_id' })
    item_tag: ItemTagEntity

    @ManyToOne(() => ItemCommonEntity, (itemCommon: ItemCommonEntity) => itemCommon.item_tag_links)
    @JoinColumn({ name: 'item_common_id' })
    item_common: ItemCommonEntity
}
