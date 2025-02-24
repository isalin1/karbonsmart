import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductovariantesService } from './productovariantes.service';
import { CreateProductovarianteDto } from './dto/create-productovariante.dto';
import { UpdateProductovarianteDto } from './dto/update-productovariante.dto';

@Controller('productovariantes')
export class ProductovariantesController {
  constructor(private readonly productovariantesService: ProductovariantesService) {}

  @Post()
  create(@Body() createProductovarianteDto: CreateProductovarianteDto) {
    return this.productovariantesService.create(createProductovarianteDto);
  }

  @Get()
  findAll() {
    return this.productovariantesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productovariantesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductovarianteDto: UpdateProductovarianteDto) {
    return this.productovariantesService.update(+id, updateProductovarianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productovariantesService.remove(+id);
  }
}
