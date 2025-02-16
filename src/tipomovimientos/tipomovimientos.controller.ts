import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipomovimientosService } from './tipomovimientos.service';
import { CreateTipomovimientoDto } from './dto/create-tipomovimiento.dto';
import { UpdateTipomovimientoDto } from './dto/update-tipomovimiento.dto';

@Controller('tipomovimientos')
export class TipomovimientosController {
  constructor(
    private readonly tipomovimientosService: TipomovimientosService,
  ) {}

  @Post()
  create(@Body() createTipomovimientoDto: CreateTipomovimientoDto) {
    return this.tipomovimientosService.create(createTipomovimientoDto);
  }

  @Get()
  findAll() {
    return this.tipomovimientosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipomovimientosService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipomovimientoDto: UpdateTipomovimientoDto,
  ) {
    return this.tipomovimientosService.update(+id, updateTipomovimientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipomovimientosService.remove(+id);
  }
}
