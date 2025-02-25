import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MovisaldoproveedoresService } from './movisaldoproveedores.service';
import { CreateMovisaldoproveedoreDto } from './dto/create-movisaldoproveedore.dto';
import { UpdateMovisaldoproveedoreDto } from './dto/update-movisaldoproveedore.dto';

@Controller('movisaldoproveedores')
export class MovisaldoproveedoresController {
  constructor(private readonly movisaldoproveedoresService: MovisaldoproveedoresService) {}

  @Post()
  create(@Body() createMovisaldoproveedoreDto: CreateMovisaldoproveedoreDto) {
    return this.movisaldoproveedoresService.create(createMovisaldoproveedoreDto);
  }

  @Get()
  findAll() {
    return this.movisaldoproveedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movisaldoproveedoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovisaldoproveedoreDto: UpdateMovisaldoproveedoreDto) {
    return this.movisaldoproveedoresService.update(+id, updateMovisaldoproveedoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.movisaldoproveedoresService.remove(+id);
  }
}
