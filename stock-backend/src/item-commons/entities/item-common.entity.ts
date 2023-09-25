import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemEntity } from '../../items/entites/item.entity';
import { ItemGroupEntity } from 'src/item-groups/entities/item-group.entity';
import { ItemTagLinkEntity } from 'src/item-tag-links/entities/item-tag-link.entity';

@Entity('item_common')
export class ItemCommonEntity {
  @PrimaryGeneratedColumn()
  item_common_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  linked_file: string;

  @OneToMany(() => ItemEntity, (item: ItemEntity) => item.item_common)
  items: ItemEntity[];

  @ManyToOne(() => ItemGroupEntity)
  @JoinColumn({name: 'item_group_id'})
  item_group: ItemGroupEntity;

  @OneToMany(() => ItemTagLinkEntity, (item_tag_link: ItemTagLinkEntity) => item_tag_link.item_common)
  item_tag_links: ItemTagLinkEntity[];
}
