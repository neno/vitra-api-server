import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { DesignersModule } from './designers/designers.module';
import { ManufacturersModule } from './manufacturers/manufacturers.module';

@Module({
  imports: [PrismaModule, ProductsModule, DesignersModule, ManufacturersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
