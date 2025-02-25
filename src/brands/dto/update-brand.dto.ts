// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';
//
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

import { IsString, MinLength } from 'class-validator';

export class UpdateBrandDto {
  @IsString({ message: `"name" debe ser un string` })
  @MinLength(1)
  name: string;
}
