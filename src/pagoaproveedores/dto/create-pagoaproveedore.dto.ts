import { IsInt, IsNumber, IsString } from "class-validator";

export class CreatePagoaproveedoreDto {
    @IsNumber()
    monto: number;
    @IsString()
    detalle: string;
    
    @IsInt()
    tipopagoId: number;
    @IsInt()
    negocioId: number;
}
