import { IsInt } from "class-validator";

export class CreateMovisaldoclienteDto {
    @IsInt()
    movimiento_id: number;
    @IsInt()
    puntoventaId: number;
    @IsInt()
    tipomovimientoId: number;
}
