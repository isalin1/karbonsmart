import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipomovimientoDto {
    @IsString()
    @IsNotEmpty() 
    tipo: string  
}
