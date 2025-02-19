import { IsInt, IsString } from 'class-validator';

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
  departamentoId: number;

  @IsInt()
  provinciaId: number;

  @IsInt()
  distritoId: number;
}
