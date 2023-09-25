import { Column, JoinColumn, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemCommonEntity } from '../../item-commons/entities/item-common.entity';
import { StockingPlaceEntity } from 'src/stocking-places/entities/stocking-place.entity';
import { ItemConditionEntity } from 'src/item-conditions/entities/item-condition.entity';
import { SupplierEntity } from 'src/suppliers/entities/supplier.entity';
import { LoanEntity } from 'src/loans/entities/loan.entity';

@Entity('item')
export class ItemEntity {
  @PrimaryGeneratedColumn()
  item_id: number;
  
  @ManyToOne(() => ItemCommonEntity)
  @JoinColumn({name: 'item_common_id'})
  item_common: ItemCommonEntity;
  
  @Column()
  inventory_prefix: string;
  
  @Column()
  serial_number: string;
  
  @Column()
  buying_price: number;

  @Column()
  buying_date: Date;

  @Column()
  warranty_duration: number;

  @Column()
  remarks: string;

  @ManyToOne(() => SupplierEntity)
  @JoinColumn({name: 'supplier_id'})
  supplier: number;

  @Column()
  supplier_ref: string;

  @Column()
  created_by_user_id: number;

  @Column()
  created_date: Date;

  @Column()
  modified_by_user_id: number;

  @Column()
  modified_date: Date;

  @Column()
  checked_by_user_id: number;

  @Column()
  checked_date: Date;

  @ManyToOne(() => StockingPlaceEntity)
  @JoinColumn({name: 'stocking_place_id'})
  stocking_place: number;

  @ManyToOne(() => ItemConditionEntity)
  @JoinColumn({name: 'item_condition_id'})
  item_condition: ItemConditionEntity;

  @OneToMany(() => LoanEntity, (loan) => loan.item)
  loans: LoanEntity[];

  current_loan: LoanEntity | null;

  getCurrentLoan(): LoanEntity | null {
    const currentDate = new Date();
    return this.loans.find((loan) => loan.date <= currentDate && loan.real_return_date === null) || null;
  }
}
