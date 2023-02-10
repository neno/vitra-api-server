import { Module } from '@nestjs/common';
import { DesignersService } from './designers.service';
import { DesignersController } from './designers.controller';

@Module({
  controllers: [DesignersController],
  providers: [DesignersService],
})
export class DesignersModule {}
