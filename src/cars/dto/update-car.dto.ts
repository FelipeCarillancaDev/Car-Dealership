import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `"brand" debe ser un string` })
  readonly brand: string;

  @IsString({ message: `"model" debe ser un string` })
  @IsString()
  readonly model: string;
}
