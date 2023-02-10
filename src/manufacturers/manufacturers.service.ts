import { Injectable } from '@nestjs/common';
import { Database } from 'src/constants/database';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ManufacturersService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.persons.findMany({
      take: Database.LIMIT,
      where: { PerTypeVoc: 'Produzent' },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.persons.findUnique({ where: { id } });
  }
}
