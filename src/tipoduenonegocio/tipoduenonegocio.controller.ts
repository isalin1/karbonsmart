import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoduenonegocioService } from './tipoduenonegocio.service';
import { CreateTipoduenonegocioDto } from './dto/create-tipoduenonegocio.dto';
import { UpdateTipoduenonegocioDto } from './dto/update-tipoduenonegocio.dto';

@Controller('tipoduenonegocio')
export class TipoduenonegocioController {
  constructor(private readonly tipoduenonegocioService: TipoduenonegocioService) {}

  @Post()
  create(@Body() createTipoduenonegocioDto: CreateTipoduenonegocioDto) {
    return this.tipoduenonegocioService.create(createTipoduenonegocioDto);
  }

  @Get()
  findAll() {
    return this.tipoduenonegocioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoduenonegocioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoduenonegocioDto: UpdateTipoduenonegocioDto) {
    return this.tipoduenonegocioService.update(+id, updateTipoduenonegocioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoduenonegocioService.remove(+id);
  }
}
