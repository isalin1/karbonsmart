import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdpresentaciontamanosService } from './prodpresentaciontamanos.service';
import { CreateProdpresentaciontamanoDto } from './dto/create-prodpresentaciontamano.dto';
import { UpdateProdpresentaciontamanoDto } from './dto/update-prodpresentaciontamano.dto';

@Controller('prodpresentaciontamanos')
export class ProdpresentaciontamanosController {
  constructor(private readonly prodpresentaciontamanosService: ProdpresentaciontamanosService) {}

  @Post()
  create(@Body() createProdpresentaciontamanoDto: CreateProdpresentaciontamanoDto) {
    return this.prodpresentaciontamanosService.create(createProdpresentaciontamanoDto);
  }

  @Get()
  findAll() {
    return this.prodpresentaciontamanosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodpresentaciontamanosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdpresentaciontamanoDto: UpdateProdpresentaciontamanoDto) {
    return this.prodpresentaciontamanosService.update(+id, updateProdpresentaciontamanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodpresentaciontamanosService.remove(+id);
  }
}
