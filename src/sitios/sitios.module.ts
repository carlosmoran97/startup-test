import { Module } from '@nestjs/common';
import { SitiosController } from './sitios.controller';
import { SitiosService } from './sitios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SitioEntity } from './sitio.entity';

@Module({
  controllers: [SitiosController],
  providers: [SitiosService],
  imports: [TypeOrmModule.forFeature([SitioEntity])]
})
export class SitiosModule { }
