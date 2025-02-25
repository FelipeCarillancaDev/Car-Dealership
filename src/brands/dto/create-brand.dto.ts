import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  @IsString({ message: `"name" debe ser un string` })
  @MinLength(1)
  name: string;
}
