import { Controller, Get, Param } from '@nestjs/common';
import { ManufacturersService } from './manufacturers.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('manufacturers')
@Controller('manufacturers')
export class ManufacturersController {
  constructor(private readonly manufacturersService: ManufacturersService) {}

  @Get()
  findAll() {
    return this.manufacturersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manufacturersService.findOne(+id);
  }
}
