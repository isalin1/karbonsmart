import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { prisma } from 'src/prisma/client';

@Injectable()
export class PersonasService {
  
  async create(createPersonaDto: CreatePersonaDto) {
    const { dni, departamentoId, provinciaId, distritoId } = createPersonaDto;
    const departamento = await prisma.departamento.findUnique({
      where: {
        id: departamentoId,
      },
    });
    if (!departamento) {
      throw new NotFoundException(
        `no se encontro un departamento con el id ${departamentoId}`,
      );
    }

    const provincia = await prisma.provincia.findUnique({
      where: {
        id: provinciaId,
      },
    });
    if (!provincia) {
      throw new NotFoundException(
        `no se encontro una provincia con el id ${provinciaId}`,
      );
    }

    const distrito = await prisma.distrito.findUnique({
      where: {
        id: distritoId,
      },
    });
    if (!distrito) {
      throw new NotFoundException(
        `no se encontro un distrito con el id ${distritoId}`,
      );
    }
    const existingPersona = await prisma.persona.findUnique({
      where: { dni },
    });
    if (existingPersona) {
      throw new ConflictException('El dni ya está en uso');
    }
    return prisma.persona.create({
      data: createPersonaDto,
    });
  }

  async findAll() {
    return await prisma.persona.findMany();
  }

  async findOne(id: number) {
    const persona = await prisma.persona.findUnique({ where: { id } });

    if (!persona) {
      throw new NotFoundException(`No se encontro un elemento con id ${id}`);
    }

    return persona;
  }
  

  async update(id: number, updatePersonaDto: UpdatePersonaDto) {
    const { dni, departamentoId, provinciaId, distritoId } = updatePersonaDto;
    await this.findOne(id);

    //si envian dni, se debe validar que sea unico
        if (dni !== null && dni !== undefined) {
        const existingPersona = await prisma.persona.findUnique({
          where: { dni },
        });
        if (existingPersona) {
          throw new ConflictException('el dni ya está en uso');
        }
      } else {
        console.warn('El dni es opcional y no fue proporcionado.');
          }
    //si envian llaves foraneas, hay que validar que existan
        if (departamentoId !== null && departamentoId !== undefined) {
                const departamento = await prisma.departamento.findUnique({
                  where: {
                    id: departamentoId,
                  },
                });
                if (!departamento) {
                  throw new NotFoundException(
                    `no se encontro un elemento con el id ${departamentoId}`,
                  );
                }
                } else {
                  console.warn('El campo departamentoId es opcional y no fue proporcionado.');
                  }

        if (provinciaId !== null && provinciaId !== undefined) {
                const provincia = await prisma.provincia.findUnique({
                  where: {
                    id: provinciaId,
                  },
                });
                if (!provincia) {
                  throw new NotFoundException(
                    `no se encontro un elemento con el id ${provinciaId}`,
                  );
                }
                } else {
                  console.warn('El campo provinciaId es opcional y no fue proporcionado.');
                  }

        if (distritoId !== null && distritoId !== undefined) {
                const distrito = await prisma.distrito.findUnique({
                    where: {
                        id: distritoId,
                            },
                          });
                if (!distrito) {
                            throw new NotFoundException(
                              `no se encontro un elemento con el id ${distritoId}`,
                            );
                          }
                } else {
                        console.warn('El campo distirtoId es opcional y no fue proporcionado.');
                      }
            //actualizacion de persona
    const persona = await prisma.persona.update({
      where: { id },
      data: updatePersonaDto,
});

return persona;
                
  }

  async remove(id: number) {
    await this.findOne(id);

    return await prisma.persona.delete({ where: { id } });
  }
}
