import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SitiosService } from './sitios.service';
import { UpdateSitioDTO, CreateSitioDTO } from './sitio.dto';
import { PaginationQueryDTO } from 'src/dtos/pagination-query.dto';

@Controller('sitios')
export class SitiosController {
  constructor(private sitiosService: SitiosService) {

  }

  @Get()
  getSitios(@Query() paginationQuery: PaginationQueryDTO) {
    return this.sitiosService.find(paginationQuery);
  }

  @Get(":id")
  getSitio(@Param('id', ParseIntPipe) id: number,) {
    return this.sitiosService.findOne(id);
  }

  @Post()
  create(@Body() createSitioDTO: CreateSitioDTO) {
    return this.sitiosService.create(createSitioDTO);
  }

  @Post(":id/like")
  likeSitio(@Param('id', ParseIntPipe) id: number) {
    return this.sitiosService.like(id);
  }

  @Put(":id")
  updateSitio(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSitioDTO: UpdateSitioDTO
  ) {
    return this.sitiosService.update(id, updateSitioDTO);
  }

  @Delete(":id")
  deleteSitio(@Param('id', ParseIntPipe) id: number) {
    return this.sitiosService.delete(id);
  }
}
