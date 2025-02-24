import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagodeclientesService } from './pagodeclientes.service';
import { CreatePagodeclienteDto } from './dto/create-pagodecliente.dto';
import { UpdatePagodeclienteDto } from './dto/update-pagodecliente.dto';

@Controller('pagodeclientes')
export class PagodeclientesController {
  constructor(private readonly pagodeclientesService: PagodeclientesService) {}

  @Post()
  create(@Body() createPagodeclienteDto: CreatePagodeclienteDto) {
    return this.pagodeclientesService.create(createPagodeclienteDto);
  }

  @Get()
  findAll() {
    return this.pagodeclientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagodeclientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagodeclienteDto: UpdatePagodeclienteDto) {
    return this.pagodeclientesService.update(+id, updatePagodeclienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagodeclientesService.remove(+id);
  }
}
