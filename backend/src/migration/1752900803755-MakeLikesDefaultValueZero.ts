import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeLikesDefaultValueZero1752900803755 implements MigrationInterface {
    name = 'MakeLikesDefaultValueZero1752900803755'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sitio_entity" ALTER COLUMN "likes" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sitio_entity" ALTER COLUMN "likes" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sitio_entity" ALTER COLUMN "likes" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "sitio_entity" ALTER COLUMN "likes" DROP NOT NULL`);
    }

}
