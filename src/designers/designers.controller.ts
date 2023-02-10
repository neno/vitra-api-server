import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DesignersService } from './designers.service';

@ApiTags('designers')
@Controller('designers')
export class DesignersController {
  constructor(private readonly designersService: DesignersService) {}

  @Get()
  findAll() {
    return this.designersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.designersService.findOne(+id);
  }
}
