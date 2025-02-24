import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateNegocioDto {
@IsString()
razonSocial: string;
@IsString()
@IsOptional()
ruc:         string;

@IsInt()
rubroId: number;
@IsInt()
tipoduenonegocioId: number;
@IsInt()
userId: number;
@IsInt()
@IsOptional()
encargadoId: number;



}
