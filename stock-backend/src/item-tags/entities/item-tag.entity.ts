import { ItemTagLinkEntity } from "src/item-tag-links/entities/item-tag-link.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('item_tag')
export class ItemTagEntity {
    @PrimaryGeneratedColumn()
    item_tag_id: number;

    @Column()
    name: string;

    @Column()
    short_name: string | null;

    @Column()
    archive: Date | null;

    @OneToMany(() => ItemTagLinkEntity, (item_tag_link: ItemTagLinkEntity) => item_tag_link.item_tag)
    item_tag_links: ItemTagLinkEntity
}
