import { ItemEntity } from "src/items/entites/item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('supplier')
export class SupplierEntity {
    @PrimaryGeneratedColumn()
    supplier_id: number;

    @Column()
    name: string;

    @Column()
    address_line1: string | null;

    @Column()
    address_line2: string | null;

    @Column()
    zip: string | null;

    @Column()
    city: string | null;

    @Column()
    country: string | null;

    @Column()
    tel: string | null;

    @Column()
    email: string | null;

    @Column()
    archive: Date | null;

    @OneToMany(() => ItemEntity, (item: ItemEntity) => item.supplier)
    items: ItemEntity;
}
