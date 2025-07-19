import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1752899186049 implements MigrationInterface {
    name = 'Init1752899186049'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sitio_entity" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "descripcion" character varying NOT NULL, "direccion" character varying NOT NULL, "url" character varying NOT NULL, "likes" integer NOT NULL, CONSTRAINT "PK_223dab600f9e6c99abe87122e32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sitio_entity"`);
    }

}
