import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransaccionprocesadasService } from './transaccionprocesadas.service';
import { CreateTransaccionprocesadaDto } from './dto/create-transaccionprocesada.dto';
import { UpdateTransaccionprocesadaDto } from './dto/update-transaccionprocesada.dto';

@Controller('transaccionprocesadas')
export class TransaccionprocesadasController {
  constructor(private readonly transaccionprocesadasService: TransaccionprocesadasService) {}

  @Post()
  create(@Body() createTransaccionprocesadaDto: CreateTransaccionprocesadaDto) {
    return this.transaccionprocesadasService.create(createTransaccionprocesadaDto);
  }

  @Get()
  findAll() {
    return this.transaccionprocesadasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transaccionprocesadasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransaccionprocesadaDto: UpdateTransaccionprocesadaDto) {
    return this.transaccionprocesadasService.update(+id, updateTransaccionprocesadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transaccionprocesadasService.remove(+id);
  }
}
