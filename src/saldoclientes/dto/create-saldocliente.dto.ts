import { IsInt, IsNumber } from "class-validator";

export class CreateSaldoclienteDto {
    @IsNumber()
    saldoactual: number;
    @IsInt()
    puntoventaId: number;
}
