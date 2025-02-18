import { Transform } from "class-transformer"
import { IsEmail, IsInt, IsString, MinLength } from "class-validator"


export class RegisterDto {

    @IsEmail()
    email: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string
    
    @IsInt()
    personaId: number
    
    @IsInt()
    rolId: number

}
