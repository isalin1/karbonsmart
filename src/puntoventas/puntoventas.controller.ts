import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PuntoventasService } from './puntoventas.service';
import { CreatePuntoventaDto } from './dto/create-puntoventa.dto';
import { UpdatePuntoventaDto } from './dto/update-puntoventa.dto';

@Controller('puntoventas')
export class PuntoventasController {
  constructor(private readonly puntoventasService: PuntoventasService) {}

  @Post()
  create(@Body() createPuntoventaDto: CreatePuntoventaDto) {
    return this.puntoventasService.create(createPuntoventaDto);
  }

  @Get()
  findAll() {
    return this.puntoventasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.puntoventasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuntoventaDto: UpdatePuntoventaDto) {
    return this.puntoventasService.update(+id, updatePuntoventaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puntoventasService.remove(+id);
  }
}
