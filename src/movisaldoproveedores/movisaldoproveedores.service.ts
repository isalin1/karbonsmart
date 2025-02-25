import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovisaldoproveedoreDto } from './dto/create-movisaldoproveedore.dto';
import { UpdateMovisaldoproveedoreDto } from './dto/update-movisaldoproveedore.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class MovisaldoproveedoresService {
  async create(createMovisaldoproveedoreDto: CreateMovisaldoproveedoreDto) {
    const {negocioId, tipomovimientoId} = createMovisaldoproveedoreDto;
//validacion si existe llave foranea
    const negocio = await prisma.negocio.findUnique({
                        where: {
                          id: negocioId,
                        },
                  });
                  if (!negocio) {
                        throw new NotFoundException(
                          `no se encontro un elemento con el id ${negocioId}`
                        );
                  }
    const tipomovimiento = await prisma.tipomovimiento.findUnique({
                    where: {
                      id: tipomovimientoId,
                    },
              });
              if (!tipomovimiento) {
                    throw new NotFoundException(
                      `no se encontro un elemento con el id ${tipomovimientoId}`
                    );
              }
      return prisma.movisaldoproveedor.create({
                data: createMovisaldoproveedoreDto,
              });

  }

  async findAll() {
    return await prisma.movisaldoproveedor.findMany();
  }

  async findOne(id: number) {
    const movisaldoproveedor = await prisma.movisaldoproveedor.findUnique({ where: { id } });
    if (!movisaldoproveedor) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return movisaldoproveedor;
  }

async update(id: number, updateMovisaldoproveedoreDto: UpdateMovisaldoproveedoreDto) {
 const {negocioId, tipomovimientoId} = updateMovisaldoproveedoreDto;
     //si envian llave foranea, hay que validar que exista
     if (negocioId !== null && negocioId !== undefined) {
           const negocio = await prisma.negocio.findUnique({
                               where: {
                                 id: negocioId,
                               },
                             });
         if (!negocio) {
                               throw new NotFoundException(
                                 `no se encontro un elemento con el id ${negocioId}`
                               )};
     } else {
                               console.warn('El campo negocioId es opcional y no fue proporcionado.');
                 }
 
     if (tipomovimientoId !== null && tipomovimientoId !== undefined) {
           const tipomovimiento = await prisma.tipomovimiento.findUnique({
                               where: {
                                 id: tipomovimientoId,
                               },
                             });
         if (!tipomovimiento) {
                               throw new NotFoundException(
                                 `no se encontro un elemento con el id ${tipomovimientoId}`
                               )};
     } else {
                               console.warn('El campo tipomovimientoId es opcional y no fue proporcionado.');
                 }
  //actualizacion de movisaldoproveedores
  const movisaldoproveedor = await prisma.movisaldoproveedor.update({
    where: { id },
    data: updateMovisaldoproveedoreDto,
    });
    return movisaldoproveedor;
    
  }

  async remove(id: number) {
    await this.findOne(id);
    return await prisma.movisaldoproveedor.delete({where: {id}});
  }
}
