import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipoduenonegocioDto {
    @IsString()
    @IsNotEmpty() 
    tipo: string 
}