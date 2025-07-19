import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CrearSitioDTO } from './sitio.dto';
import { SitioEntity } from './sitio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SitiosService {
  constructor(
    @InjectRepository(SitioEntity)
    private sitioRepository: Repository<SitioEntity>,
  ) { }

  async retrieve() {
    return await this.sitioRepository.find();
  }

  async create(sitioDTO: CrearSitioDTO) {
    try {
      return await this.sitioRepository.save(sitioDTO);
    } catch (err) {
      throw new InternalServerErrorException("Could't save site to the database");
    }
  }
}
