import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipopagosService } from './tipopagos.service';
import { CreateTipopagoDto } from './dto/create-tipopago.dto';
import { UpdateTipopagoDto } from './dto/update-tipopago.dto';

@Controller('tipopagos')
export class TipopagosController {
  constructor(private readonly tipopagosService: TipopagosService) {}

  @Post()
  create(@Body() createTipopagoDto: CreateTipopagoDto) {
    return this.tipopagosService.create(createTipopagoDto);
  }

  @Get()
  findAll() {
    return this.tipopagosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipopagosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipopagoDto: UpdateTipopagoDto) {
    return this.tipopagosService.update(+id, updateTipopagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipopagosService.remove(+id);
  }
}
