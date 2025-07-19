import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeLikesNullableOnSitio1752900395840 implements MigrationInterface {
    name = 'MakeLikesNullableOnSitio1752900395840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sitio_entity" ALTER COLUMN "likes" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sitio_entity" ALTER COLUMN "likes" SET NOT NULL`);
    }

}
