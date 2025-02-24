import { isInt, IsInt, IsOptional, IsString } from "class-validator";

export class CreateEncargadoDto {
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
userId: number;

@IsInt()
@IsOptional()
negocioId: number;
}