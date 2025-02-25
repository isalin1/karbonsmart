import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovisaldoclientesService } from './movisaldoclientes.service';
import { CreateMovisaldoclienteDto } from './dto/create-movisaldocliente.dto';
import { UpdateMovisaldoclienteDto } from './dto/update-movisaldocliente.dto';

@Controller('movisaldoclientes')
export class MovisaldoclientesController {
  constructor(private readonly movisaldoclientesService: MovisaldoclientesService) {}

  @Post()
  create(@Body() createMovisaldoclienteDto: CreateMovisaldoclienteDto) {
    return this.movisaldoclientesService.create(createMovisaldoclienteDto);
  }

  @Get()
  findAll() {
    return this.movisaldoclientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movisaldoclientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovisaldoclienteDto: UpdateMovisaldoclienteDto) {
    return this.movisaldoclientesService.update(+id, updateMovisaldoclienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movisaldoclientesService.remove(+id);
  }
}
