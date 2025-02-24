import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateProdpresentacionDto {

    @IsString()
    empaque: string;

    @IsArray()
    @IsOptional()
    unidadesIds?: number[];
}
