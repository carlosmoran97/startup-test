import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsUrl } from "class-validator";

export class CreateSitioDTO {
  @IsString()
  @ApiProperty({ example: 'Playa El Tunco' })
  nombre: string;

  @IsString()
  @ApiProperty({ example: 'Una playa famosa por el surf.' })
  descripcion: string;

  @IsString()
  @ApiProperty({ example: 'El Tunco, Tamanique, La Libertad' })
  direccion: string;

  @IsUrl()
  @ApiProperty({
    example: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'URL de una imagen representativa del sitio',
  })
  url: string;
}

export class UpdateSitioDTO {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Playa El Tunco' })
  nombre?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Una playa famosa por el surf.' })
  descripcion?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'El Tunco, Tamanique, La Libertad' })
  direccion?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'URL de una imagen representativa del sitio',
  })
  url?: string;
}
