import { ItemEntity } from "src/items/entites/item.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('loan')
export class LoanEntity {
  @PrimaryGeneratedColumn()
  loan_id: number;

  @Column()
  date: Date;

  @Column()
  item_localisation: string | null;

  @Column()
  remarks: string | null;

  @Column()
  planned_return_date: Date | null;
  
  @Column()
  real_return_date: Date | null;

  @Column()
  item_id: number;

  @Column()
  loan_by_user_id: number;
  
  @Column()
  loan_to_user_id: number | null;

  @Column()
  borrower_email: string | null;

  @ManyToOne(() => ItemEntity, (item) => item.loans)
  @JoinColumn({ name: 'item_id' })
  item: ItemEntity;
}
