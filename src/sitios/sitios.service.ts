import { Injectable } from '@nestjs/common';
import { CrearSitioDTO } from './sitio.dto';
import { SitioEntity } from './sitio.entity';

@Injectable()
export class SitiosService {

  crearSitio(sitio: CrearSitioDTO) {
    const sitioEntity = new SitioEntity();
    return sitio;
  }
}
