import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { SitiosService } from './sitios.service';
import { UpdateSitioDTO, CreateSitioDTO } from './sitio.dto';
import { PaginationQueryDTO } from '../../src/dtos/pagination-query.dto';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('sitios')
export class SitiosController {
  constructor(private sitiosService: SitiosService) {

  }

  @Get()
  @ApiOperation({ summary: 'Obtener sitios paginados' })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'Lista paginada de sitios' })
  getSitios(@Query() paginationQuery: PaginationQueryDTO) {
    return this.sitiosService.find(paginationQuery);
  }

  @Get(":id")
  @ApiOperation({ summary: 'Obtener un sitio por ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Sitio encontrado' })
  @ApiResponse({ status: 404, description: 'Sitio no encontrado' })
  getSitio(@Param('id', ParseIntPipe) id: number,) {
    return this.sitiosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo sitio' })
  @ApiResponse({ status: 201, description: 'Sitio creado' })
  create(@Body() createSitioDTO: CreateSitioDTO) {
    return this.sitiosService.create(createSitioDTO);
  }

  @Post(":id/like")
  @ApiOperation({ summary: 'Dar like a un sitio' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Like registrado' })
  @ApiResponse({ status: 404, description: 'Sitio no encontrado' })
  likeSitio(@Param('id', ParseIntPipe) id: number) {
    return this.sitiosService.like(id);
  }

  @Put(":id")
  @ApiOperation({ summary: 'Actualizar un sitio' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Sitio actualizado' })
  @ApiResponse({ status: 404, description: 'Sitio no encontrado' })
  updateSitio(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSitioDTO: UpdateSitioDTO
  ) {
    return this.sitiosService.update(id, updateSitioDTO);
  }

  @Delete(":id")
  @ApiOperation({ summary: 'Eliminar un sitio' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Sitio eliminado' })
  @ApiResponse({ status: 404, description: 'Sitio no encontrado' })
  deleteSitio(@Param('id', ParseIntPipe) id: number) {
    return this.sitiosService.delete(id);
  }
}
