import {MigrationInterface, QueryRunner} from "typeorm";

export class post1585077034693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "lastName" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "lastName"`); // reverts things made in "up" method
    }

}
