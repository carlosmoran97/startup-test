import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "startup",
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/src/migration/*.js'],
  synchronize: false,
});
