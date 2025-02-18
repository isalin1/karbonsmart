import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistritosService } from './distritos.service';
import { CreateDistritoDto } from './dto/create-distrito.dto';
import { UpdateDistritoDto } from './dto/update-distrito.dto';

@Controller('distritos')
export class DistritosController {
  constructor(private readonly distritosService: DistritosService) {}

  @Post()
  create(@Body() createDistritoDto: CreateDistritoDto) {
    return this.distritosService.create(createDistritoDto);
  }

  @Get()
  findAll() {
    return this.distritosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distritosService.findOne(+id);
  }

  @Get('provincia/:id')
  findByProvincia(@Param('id') id:string){
    return this.distritosService.findByProvincia(+id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistritoDto: UpdateDistritoDto) {
    return this.distritosService.update(+id, updateDistritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distritosService.remove(+id);
  }
}
