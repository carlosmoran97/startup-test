import { IsOptional, IsString, IsUrl } from "class-validator";

export class CreateSitioDTO {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsString()
  direccion: string;

  @IsUrl()
  url: string;
}

export class UpdateSitioDTO {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  url?: string;
}
