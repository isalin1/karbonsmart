import { IsArray, IsInt, IsOptional, IsString } from "class-validator";

export class CreateProductoDto {
    
    @IsString()
    nombre: string;
    
    @IsInt()
    tipoproductoId: number;

    @IsArray()
    @IsOptional()
    negocioIds?: number[];

}
