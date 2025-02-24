import { Tipotransaccion } from "@prisma/client";
import { IsEnum, IsInt, IsISO8601, IsNumber, IsString, } from "class-validator";

export class CreateTransaccioneDto {
    
    @IsISO8601()
    fechaentrega: string;
    
    @IsNumber()
    valortrans: number;
    
    @IsString()
    estado: string;

    @IsEnum(Tipotransaccion)
    tipotrans: Tipotransaccion;

    @IsInt()
    puntoventaId: number;
}
