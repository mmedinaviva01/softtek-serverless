import { Controller, Get, Param } from '@nestjs/common';
import { PlanetService } from './planets.service';

@Controller('planets')
export class PlanetController {
  constructor(private readonly planetService: PlanetService) {}

  @Get()
  async getAllPlanet(): Promise<any> {
    return await this.planetService.getAllPlanet();
  }
  @Get(':id')
  async getPlanet(@Param('id') id: string): Promise<any> {
    return await this.planetService.getPlanet(id);
  }
}
