import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovinventariosService } from './movinventarios.service';
import { CreateMovinventarioDto } from './dto/create-movinventario.dto';
import { UpdateMovinventarioDto } from './dto/update-movinventario.dto';

@Controller('movinventarios')
export class MovinventariosController {
  constructor(private readonly movinventariosService: MovinventariosService) {}

  @Post()
  create(@Body() createMovinventarioDto: CreateMovinventarioDto) {
    return this.movinventariosService.create(createMovinventarioDto);
  }

  @Get()
  findAll() {
    return this.movinventariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movinventariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovinventarioDto: UpdateMovinventarioDto) {
    return this.movinventariosService.update(+id, updateMovinventarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movinventariosService.remove(+id);
  }
}
