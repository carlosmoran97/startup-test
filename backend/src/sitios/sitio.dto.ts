import { IsString, IsUrl } from "class-validator";

export class CrearSitioDTO {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsString()
  direccion: string;

  @IsUrl()
  url: string;
}
