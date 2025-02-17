import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TipomovistocksService } from './tipomovistocks.service';
import { CreateTipomovistockDto } from './dto/create-tipomovistock.dto';
import { UpdateTipomovistockDto } from './dto/update-tipomovistock.dto';

@Controller('tipomovistocks')
export class TipomovistocksController {
  constructor(private readonly tipomovistocksService: TipomovistocksService) {}

  @Post()
  create(@Body() createTipomovistockDto: CreateTipomovistockDto) {
    return this.tipomovistocksService.create(createTipomovistockDto);
  }

  @Get()
  findAll() {
    return this.tipomovistocksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipomovistocksService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipomovistockDto: UpdateTipomovistockDto,
  ) {
    return this.tipomovistocksService.update(+id, updateTipomovistockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipomovistocksService.remove(+id);
  }
}
