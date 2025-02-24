import { IsInt, IsNumber } from "class-validator";

export class CreateSaldoproveedoreDto {
    @IsNumber()
    saldoactual: number;
    @IsInt()
    negocioId: number;
}
