import { IsInt, IsNumber} from "class-validator";

export class CreateTransacciondetalleDto {
    @IsInt()
    cantidad: number;
    @IsNumber()
    preciounit: number;

    @IsInt()
    transaccionId: number;

    @IsInt()
    productoId:number;
}
