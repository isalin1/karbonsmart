import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoproductosService } from './tipoproductos.service';
import { CreateTipoproductoDto } from './dto/create-tipoproducto.dto';
import { UpdateTipoproductoDto } from './dto/update-tipoproducto.dto';

@Controller('tipoproductos')
export class TipoproductosController {
  constructor(private readonly tipoproductosService: TipoproductosService) {}

  @Post()
  create(@Body() createTipoproductoDto: CreateTipoproductoDto) {
    return this.tipoproductosService.create(createTipoproductoDto);
  }

  @Get()
  findAll() {
    return this.tipoproductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoproductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoproductoDto: UpdateTipoproductoDto) {
    return this.tipoproductosService.update(+id, updateTipoproductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoproductosService.remove(+id);
  }
}
