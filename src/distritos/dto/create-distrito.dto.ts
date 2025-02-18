import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateDistritoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string

    @IsInt()
    provinciaId: number
}