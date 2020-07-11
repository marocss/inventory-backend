/* eslint-disable class-methods-use-this */
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateItemsDetails1594416361704
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'items_details',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'item_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'user_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'retailer_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'purchased_date',
            type: 'timestamp',
          },
          {
            name: 'expiration_date',
            type: 'timestamp',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'image_url',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'int',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'items_details',
      new TableForeignKey({
        name: 'ItemsDetailsRetailers',
        columnNames: ['retailer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'retailers',
      }),
    );
    await queryRunner.createForeignKey(
      'items_details',
      new TableForeignKey({
        name: 'ItemsDetailsUsers',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
      }),
    );
    await queryRunner.createForeignKey(
      'items_details',
      new TableForeignKey({
        name: 'ItemsDetailsItems',
        columnNames: ['item_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'items',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('items_details', 'ItemsDetailsItems');
    await queryRunner.dropForeignKey('items_details', 'ItemsDetailsUsers');
    await queryRunner.dropForeignKey('items_details', 'ItemsDetailsRetailers');
    await queryRunner.dropTable('items_details');
  }
}
