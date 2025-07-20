import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UpdateSitioDTO, CreateSitioDTO } from './sitio.dto';
import { SitioEntity } from './sitio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaginationQueryDTO } from 'src/dtos/pagination-query.dto';

@Injectable()
export class SitiosService {
  constructor(
    @InjectRepository(SitioEntity)
    private sitioRepository: Repository<SitioEntity>,
  ) { }

  async find(paginationQuery: PaginationQueryDTO) {
    const { limit = 10, offset = 0 } = paginationQuery;
    const [items, total] = await this.sitioRepository.findAndCount({
      skip: Number(offset),
      take: Number(limit),
      order: { id: 'DESC' },
    });
    return {
      data: items,
      total,
      limit: Number(limit),
      offset: Number(offset),
    };
  }

  async findOne(id: number) {
    const sitio = await this.sitioRepository.findOneBy({ id });
    if (!sitio) {
      throw new NotFoundException(`Site with ID ${id} not found.`);
    }
    return sitio;
  }

  async create(sitioDTO: CreateSitioDTO) {
    try {
      return await this.sitioRepository.save(sitioDTO);
    } catch (err) {
      throw new InternalServerErrorException("Could't save site to the database");
    }
  }

  async like(id: number) {

    const sitio = await this.sitioRepository.findOneBy({ id });

    if (!sitio) {
      throw new NotFoundException(`Site with ID ${id} not found.`);
    }

    try {
      Object.assign(sitio, {
        ...sitio,
        likes: sitio.likes + 1,
      });

      return await this.sitioRepository.save(sitio);
    } catch (err) {
      throw new InternalServerErrorException("Could't save site to the database");
    }
  }

  async update(id: number, sitioDTO: UpdateSitioDTO) {

    const sitio = await this.sitioRepository.findOneBy({ id });

    if (!sitio) {
      throw new NotFoundException(`Site with ID ${id} not found.`);
    }

    try {
      Object.assign(sitio, sitioDTO);

      return await this.sitioRepository.save(sitio);
    } catch (err) {
      throw new InternalServerErrorException("Could't save site to the database");
    }
  }

  async delete(id: number) {
    const sitio = await this.sitioRepository.findOneBy({ id });

    if (!sitio) {
      throw new NotFoundException(`Site with ID ${id} not found.`);
    }

    return await this.sitioRepository.delete(id);
  }
}
