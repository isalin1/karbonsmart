import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransacciondetallesService } from './transacciondetalles.service';
import { CreateTransacciondetalleDto } from './dto/create-transacciondetalle.dto';
import { UpdateTransacciondetalleDto } from './dto/update-transacciondetalle.dto';

@Controller('transacciondetalles')
export class TransacciondetallesController {
  constructor(private readonly transacciondetallesService: TransacciondetallesService) {}

  @Post()
  create(@Body() createTransacciondetalleDto: CreateTransacciondetalleDto) {
    return this.transacciondetallesService.create(createTransacciondetalleDto);
  }

  @Get()
  findAll() {
    return this.transacciondetallesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacciondetallesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransacciondetalleDto: UpdateTransacciondetalleDto) {
    return this.transacciondetallesService.update(+id, updateTransacciondetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transacciondetallesService.remove(+id);
  }
}
