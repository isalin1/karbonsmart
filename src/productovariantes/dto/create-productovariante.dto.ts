import { IsInt, IsNumber, IsOptional } from "class-validator";

export class CreateProductovarianteDto {
    @IsNumber()
    costo: number;
    @IsNumber()
    preciosinigv: number;
    @IsInt()
    stock: number

    @IsInt()
    @IsOptional()
    productoId: number;

    @IsInt()
    @IsOptional()
    prodpresentaciontamanoId: number;
}
