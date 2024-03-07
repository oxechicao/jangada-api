import { IsDate } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class TransactionOrigin {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    transactionOrigin: string

    @CreateDateColumn()
    @IsDate()
    createdAt: Date

    @UpdateDateColumn()
    @IsDate()
    updatedAt: Date

    @DeleteDateColumn()
    @IsDate()
    deletedAt: Date
}