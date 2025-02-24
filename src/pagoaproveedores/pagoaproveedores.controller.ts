import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagoaproveedoresService } from './pagoaproveedores.service';
import { CreatePagoaproveedoreDto } from './dto/create-pagoaproveedore.dto';
import { UpdatePagoaproveedoreDto } from './dto/update-pagoaproveedore.dto';

@Controller('pagoaproveedores')
export class PagoaproveedoresController {
  constructor(private readonly pagoaproveedoresService: PagoaproveedoresService) {}

  @Post()
  create(@Body() createPagoaproveedoreDto: CreatePagoaproveedoreDto) {
    return this.pagoaproveedoresService.create(createPagoaproveedoreDto);
  }

  @Get()
  findAll() {
    return this.pagoaproveedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagoaproveedoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagoaproveedoreDto: UpdatePagoaproveedoreDto) {
    return this.pagoaproveedoresService.update(+id, updatePagoaproveedoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagoaproveedoresService.remove(+id);
  }
}
