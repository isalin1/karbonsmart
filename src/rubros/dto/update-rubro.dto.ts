import { IsNotEmpty, IsString } from "class-validator";

//export class UpdateRubroDto extends PartialType(CreateRubroDto) {}
export class UpdateRubroDto {
    @IsString()
    @IsNotEmpty()
    nombre: string
}