import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaldoproveedoreDto } from './dto/create-saldoproveedore.dto';
import { UpdateSaldoproveedoreDto } from './dto/update-saldoproveedore.dto';
import { prisma } from 'src/prisma/client';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Injectable()
export class SaldoproveedoresService {
  async create(createSaldoproveedoreDto: CreateSaldoproveedoreDto) {
    const {negocioId} = createSaldoproveedoreDto;
        //validacion si existe llave foranea
        const negocio = await prisma.negocio.findUnique({
                    where: {
                      id: negocioId,
                    },
              });
              if (!negocio) {
                    throw new NotFoundException(
                      `no se encontro un elemento con el id ${negocioId}`,
                    );
              }
              return prisma.saldoproveedor.create({
                data: createSaldoproveedoreDto,
              });

  }

  async findAll() {
    return await prisma.saldoproveedor.findMany();
  }

  async findOne(id: number) {
    const saldoproveedor = await prisma.saldoproveedor.findUnique({where: {id}});

    if(!saldoproveedor){
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }
    return saldoproveedor;

  }

  async update(id: number, updateSaldoproveedoreDto: UpdateSaldoproveedoreDto) {
    const {negocioId} = updateSaldoproveedoreDto;
    //si envian llave foranea, hay que validar que exista
    if(negocioId!== null && negocioId!== undefined ){
      const negocio = await prisma.negocio.findUnique({
        where: {
          id: negocioId,
        },
      });
    if(!negocio){
      throw new NotFoundException( 
        `no se encontro un elemento con el id ${negocioId}`
      )};
  } else {
      console.warn('El campo negocioId es opcional y no fue proporcionado.');
} 
//actualizacion de saldoproveedor
const saldoproveedor = await prisma.saldoproveedor.update({
  where: { id },
  data: updateSaldoproveedoreDto,
  });
  return saldoproveedor; 

  }

async remove(id: number) {
    await this.findOne(id);
    return await prisma.saldoproveedor.delete({where: {id}});
  }
}
