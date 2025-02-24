import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaldoclientesService } from './saldoclientes.service';
import { CreateSaldoclienteDto } from './dto/create-saldocliente.dto';
import { UpdateSaldoclienteDto } from './dto/update-saldocliente.dto';

@Controller('saldoclientes')
export class SaldoclientesController {
  constructor(private readonly saldoclientesService: SaldoclientesService) {}

  @Post()
  create(@Body() createSaldoclienteDto: CreateSaldoclienteDto) {
    return this.saldoclientesService.create(createSaldoclienteDto);
  }

  @Get()
  findAll() {
    return this.saldoclientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saldoclientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaldoclienteDto: UpdateSaldoclienteDto) {
    return this.saldoclientesService.update(+id, updateSaldoclienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saldoclientesService.remove(+id);
  }
}
