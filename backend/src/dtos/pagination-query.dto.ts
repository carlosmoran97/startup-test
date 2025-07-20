import { IsNumberString, IsOptional } from "class-validator";

export class PaginationQueryDTO {
  @IsOptional()
  @IsNumberString()
  limit?: number;

  @IsOptional()
  @IsNumberString()
  offset?: number;
}
