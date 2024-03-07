import { IsDate } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    category: string

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