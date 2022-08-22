import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class AlterUserDeleteUsername1661132762096 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users","username");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users",
            new TableColumn({
                name: "username",
                type: "varchar"
            })
        )
    }

}
