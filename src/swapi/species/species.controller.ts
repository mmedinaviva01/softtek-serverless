import { Controller, Get, Param } from '@nestjs/common';
import { SpecieService } from './species.service';

@Controller('species')
export class SpecieController {
  constructor(private readonly filmService: SpecieService) {}

  @Get()
  async getAllSpecie(): Promise<any> {
    return await this.filmService.getAllSpecie();
  }
  @Get(':id')
  async getSpecie(@Param('id') id: string): Promise<any> {
    return await this.filmService.getSpecie(id);
  }
}
