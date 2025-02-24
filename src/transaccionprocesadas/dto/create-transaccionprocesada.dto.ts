import { Tipotransaccion } from "@prisma/client";
import { IsEnum, IsInt, IsNumber } from "class-validator";

export class CreateTransaccionprocesadaDto {
    @IsNumber()
    valortransproc: number;
    
    @IsEnum(Tipotransaccion)
    tipotrans: Tipotransaccion;
    
    @IsInt()
    transaccionId: number;
}
