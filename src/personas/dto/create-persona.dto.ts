import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  nombre: string;
  @IsString()
  apellidos: string;
  @IsString()
  dni: string;
  @IsString()
  telefono: string;

  @IsInt()
  @IsOptional()
  departamentoId: number;

  @IsInt()
  @IsOptional()
  provinciaId: number;

  @IsInt()
  @IsOptional()
  distritoId: number;
}
