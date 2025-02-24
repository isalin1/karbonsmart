import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateProdpresentaciontamanoDto {
@IsString()
tamano: string;
    
@IsArray()
@IsOptional()
negociosIds?: number[];

@IsArray()
@IsOptional()
prodpresentacionesIds?: number[];
}
