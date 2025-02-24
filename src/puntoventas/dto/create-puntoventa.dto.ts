import { IsInt, IsString } from "class-validator";

export class CreatePuntoventaDto {
    @IsString()
    nombrecomercial: string;
    @IsString()
    direccion: string;

    @IsInt()
    negocioId: number;
    @IsInt()
    encargadoId: number;
    @IsInt()
    departamentoId: number;
    @IsInt()
    provinciaId: number;
    @IsInt()
    distritoId: number;
}
