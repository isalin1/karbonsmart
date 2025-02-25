import { IsInt } from "class-validator";

export class CreateMovisaldoproveedoreDto {
    @IsInt()
    movimiento_id: number;
    @IsInt()
    negocioId: number;
    @IsInt()
    tipomovimientoId: number;
    
}
