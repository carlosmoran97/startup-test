import { SitiosService } from './sitios.service';
import { CrearSitioDTO } from './sitio.dto';
export declare class SitiosController {
    private sitiosService;
    constructor(sitiosService: SitiosService);
    getSitios(): string;
    createSitio(createSitioDTO: CrearSitioDTO): CrearSitioDTO;
    likeSitio(): void;
    updateSitio(): void;
    deleteSitio(params: any): string;
}
