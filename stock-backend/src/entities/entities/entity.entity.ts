import { ItemGroupEntity } from 'src/item-groups/entities/item-group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entity')
export class EntityEntity {
  @PrimaryGeneratedColumn()
  entity_id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  zip: string;

  @Column()
  locality: string;

  @Column()
  shortname: string;

  @Column()
  archive: Date | null;

  @OneToMany(() => ItemGroupEntity, (item_group: ItemGroupEntity) => item_group.entity)
  item_groups: ItemGroupEntity[];
}
