import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SitiosModule } from './sitios/sitios.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    SitiosModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5433,
      username: "postgres",
      password: "postgres",
      database: "startup",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
