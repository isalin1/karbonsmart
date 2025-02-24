import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaldoproveedoresService } from './saldoproveedores.service';
import { CreateSaldoproveedoreDto } from './dto/create-saldoproveedore.dto';
import { UpdateSaldoproveedoreDto } from './dto/update-saldoproveedore.dto';

@Controller('saldoproveedores')
export class SaldoproveedoresController {
  constructor(private readonly saldoproveedoresService: SaldoproveedoresService) {}

  @Post()
  create(@Body() createSaldoproveedoreDto: CreateSaldoproveedoreDto) {
    return this.saldoproveedoresService.create(createSaldoproveedoreDto);
  }

  @Get()
  findAll() {
    return this.saldoproveedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saldoproveedoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaldoproveedoreDto: UpdateSaldoproveedoreDto) {
    return this.saldoproveedoresService.update(+id, updateSaldoproveedoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saldoproveedoresService.remove(+id);
  }
}
