import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdpresentacionService } from './prodpresentacion.service';
import { CreateProdpresentacionDto } from './dto/create-prodpresentacion.dto';
import { UpdateProdpresentacionDto } from './dto/update-prodpresentacion.dto';

@Controller('prodpresentacion')
export class ProdpresentacionController {
  constructor(private readonly prodpresentacionService: ProdpresentacionService) {}

  @Post()
  create(@Body() createProdpresentacionDto: CreateProdpresentacionDto) {
    return this.prodpresentacionService.create(createProdpresentacionDto);
  }

  @Get()
  findAll() {
    return this.prodpresentacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodpresentacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdpresentacionDto: UpdateProdpresentacionDto) {
    return this.prodpresentacionService.update(+id, updateProdpresentacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodpresentacionService.remove(+id);
  }
}
