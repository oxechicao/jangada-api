import { MigrationInterface, QueryRunner } from 'typeorm';

export class TransactionType1709777262796 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE transactionType (
        id uuid DEFAULT gen_random_uuid(),
        transactionType VARCHAR,
        createdAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updatedAt TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        deletedAt TIMESTAMPTZ
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('transactionType');
  }
}
