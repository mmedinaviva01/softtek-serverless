import { Controller, Get, Param } from '@nestjs/common';
import { StarShipService } from './starships.service';

@Controller('starships')
export class StarShipController {
  constructor(private readonly starShipService: StarShipService) {}

  @Get()
  async getAllStarShip(): Promise<any> {
    return await this.starShipService.getAllStarShip();
  }
  @Get(':id')
  async getStarShip(@Param('id') id: string): Promise<any> {
    return await this.starShipService.getStarShip(id);
  }
}
