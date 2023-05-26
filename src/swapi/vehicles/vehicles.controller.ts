import { Controller, Get, Param } from '@nestjs/common';
import { VehicleService } from './vehicles.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly filmService: VehicleService) {}

  @Get()
  async getAllVehicle(): Promise<any> {
    return await this.filmService.getAllVehicle();
  }
  @Get(':id')
  async getVehicle(@Param('id') id: string): Promise<any> {
    return await this.filmService.getVehicle(id);
  }
}
