import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateProvinciaDto {
    @IsNotEmpty()
    @IsString()
    nombre: string

    @IsInt()
    departamentoId: number
}
