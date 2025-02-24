import { IsInt, IsString } from "class-validator";

export class CreateMovinventarioDto {
    @IsInt()
    cantidad: number;
    @IsString()
    razon: string;

    @IsInt()
    tipomovistockId: number;
    @IsInt()
    transaccionId: number;
    @IsInt()
    productovarianteId: number;
}
