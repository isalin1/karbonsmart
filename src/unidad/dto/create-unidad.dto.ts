import { IsNotEmpty, IsString } from "class-validator";

export class CreateUnidadDto {
    @IsString()
    @IsNotEmpty()
    nombre: string
}
