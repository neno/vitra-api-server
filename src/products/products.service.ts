import { Injectable } from '@nestjs/common';
import { Database } from 'src/constants/database';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return await this.prismaService.objects.findMany({
      take: Database.LIMIT,
      select: {
        id: true,
        ObjObjectTitleTxt: true,
        ObjCategoryVoc: true,
        ObjDateTxt: true,
        ObjDesigner: true,
        ObjDimension: true,
        ObjMarkdown: true,
        ObjMaterialTechniqueTxt: true,
        ObjMultimediaRel: true,
        ObjFullText: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.objects.findUnique({ where: { id } });
  }
}
