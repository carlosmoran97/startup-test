import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SitiosService } from './sitios.service';
import { CrearSitioDTO } from './sitio.dto';

@Controller('sitios')
export class SitiosController {
  constructor(private sitiosService: SitiosService) {

  }

  @Get()
  getSitios() {
    return "Sitios";
  }

  @Post()
  createSitio(@Body() createSitioDTO: CrearSitioDTO) {
    return this.sitiosService.crearSitio(createSitioDTO);
  }

  @Post(":id")
  likeSitio() {

  }

  @Put(":id")
  updateSitio() {

  }

  @Delete(":id")
  deleteSitio(@Param() params: any) {
    return `Eliminar el sitio con ID: ${params.id}`;
  }
}
