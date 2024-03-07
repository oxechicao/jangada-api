import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsDate, IsInt, IsNumber, Min } from 'class-validator';

import { TransactionType } from 'src/transactionType/transactionType.entity';
import { PeriodType } from 'src/periodType/periodType.entity';
import { Category } from 'src/category/category.entity';
import { TransactionOrigin } from 'src/transactionOrigin/transactionOrigin.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @IsNumber()
  @Min(0)
  currentInstallment: number;

  @Column()
  @IsNumber()
  @Min(1)
  totalInstallment: number;

  @Column()
  @IsInt()
  @Min(0)
  value: number;

  @Column()
  @IsDate()
  purchaseDate: Date;

  @Column()
  @IsDate()
  lastPaymentDate: Date;

  @ManyToOne(() => TransactionType)
  @JoinColumn({
    name: 'idTransactionType',
    referencedColumnName: 'id',
  })
  transactionType: TransactionType;

  @ManyToOne(() => PeriodType)
  @JoinColumn({
    name: 'idPeriodType',
    referencedColumnName: 'id',
  })
  periodType: PeriodType;

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'idCategory',
    referencedColumnName: 'id',
  })
  category: Category;

  @ManyToOne(() => TransactionOrigin)
  @JoinColumn({
    name: 'idTransactionOrigin',
    referencedColumnName: 'id',
  })
  transactionOrigin: TransactionOrigin;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @DeleteDateColumn()
  @IsDate()
  deletedAt: Date;
}
