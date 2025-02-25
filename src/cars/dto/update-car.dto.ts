import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {
  @IsString({ message: `"id" debe ser un string` })
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: `"brand" debe ser un string` })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: `"model" debe ser un string` })
  @IsOptional()
  readonly model?: string;
}
