import { IsInt, IsNumber, IsString } from "class-validator";

export class CreatePagodeclienteDto {
    @IsNumber()
    monto: number;
    @IsString()
    detalle: string;

    @IsInt()
    tipopagoId: number;
    @IsInt()
    puntoventaId: number;
}
