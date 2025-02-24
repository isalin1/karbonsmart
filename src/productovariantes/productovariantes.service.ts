import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductovarianteDto } from './dto/create-productovariante.dto';
import { UpdateProductovarianteDto } from './dto/update-productovariante.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class ProductovariantesService {
  async create(createProductovarianteDto: CreateProductovarianteDto) {
    const {costo, stock, preciosinigv, productoId, prodpresentaciontamanoId} = createProductovarianteDto;

    //validar si existen las llaves foraneaa
    const producto = await prisma.producto.findUnique({
      where: {
        id: productoId,
      },
    });
    if (!producto) {
      throw new NotFoundException(
        `no se encontro un producto con el id ${productoId}`,
      );
    }

    const prodpresentaciontamano = await prisma.prodpresentaciontamano.findUnique({
      where: {
        id: prodpresentaciontamanoId,
      },
    });
    if (!prodpresentaciontamano) {
      throw new NotFoundException(
        `no se encontro un prodpresentaciontamano con el id ${prodpresentaciontamanoId}`,
      );
    }
    
    return await prisma.productovariante.create({
      data: {
        costo: costo,
        stock: stock,
        preciosinigv: preciosinigv,
        precioconigv: preciosinigv * 1.18,
        productoId: productoId,
        prodpresentaciontamanoId: prodpresentaciontamanoId
      },
    }); 

  }

  async findAll() {
    return await prisma.productovariante.findMany();
  }

  async findOne(id: number) {
    const productovariante = await prisma.productovariante.findUnique({ where: { id } });

    if (!productovariante) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return productovariante;
  }


  async update(id: number, updateProductovarianteDto: UpdateProductovarianteDto) {
    const {costo, stock, preciosinigv, productoId, prodpresentaciontamanoId} = updateProductovarianteDto;
    await this.findOne(id);

//si envian llaves foraneas, hay que validar que existan
    if (productoId !== null && productoId !== undefined) {
                const producto = await prisma.producto.findUnique({
                  where: {
                    id: productoId,
                  },
                });
                if (!producto) {
                  throw new NotFoundException(
                    `no se encontro un elemento con el id ${productoId}`,
                  );
                }
                } else {
                  console.warn('El campo productoId es opcional y no fue proporcionado.');
                  }
//si envian llaves foraneas, hay que validar que existan
    if (prodpresentaciontamanoId !== null && prodpresentaciontamanoId !== undefined) {
                const prodpresentaciontamano = await prisma.prodpresentaciontamano.findUnique({
                  where: {
                    id: prodpresentaciontamanoId,
                  },
                });
                if (!prodpresentaciontamano) {
                  throw new NotFoundException(
                    `no se encontro un elemento con el id ${prodpresentaciontamanoId}`,
                  );
                }
                } else {
                  console.warn('El campo prodpresentaciontamanoId es opcional y no fue proporcionado.');
                  }
  //actualizacion de productovariante
  const productovariante = await prisma.productovariante.update({
    where: { id },
    data: updateProductovarianteDto,
});

return productovariante;

  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.productovariante.delete({ where: { id } });
  }
}
