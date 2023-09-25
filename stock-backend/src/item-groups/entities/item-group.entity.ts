import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EntityEntity } from '../../entities/entities/entity.entity';
import { ItemCommonEntity } from 'src/item-commons/entities/item-common.entity';

@Entity('item_group')
export class ItemGroupEntity {
  @PrimaryGeneratedColumn()
  item_group_id: number;

  @Column()
  name: string;

  @Column()
  short_name: string;

  @Column()
  archive: Date | null;

  @Column()
  fk_entity_id: number;

  @OneToMany(() => ItemCommonEntity, (itemCommon: ItemCommonEntity) => itemCommon.item_group)
  item_commons: ItemCommonEntity[];

  @ManyToOne(() => EntityEntity)
  @JoinColumn({name: 'fk_entity_id'})
  entity: EntityEntity;
}
