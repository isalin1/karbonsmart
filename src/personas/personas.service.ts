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

  findOne(id: number) {
    return `This action returns a #${id} persona`;
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} persona`;
  }
}
