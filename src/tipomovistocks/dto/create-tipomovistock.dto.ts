import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipomovistockDto {
    @IsString()
    @IsNotEmpty() 
    tipo: string 
}
