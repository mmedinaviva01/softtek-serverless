import { Module } from '@nestjs/common';
import { VehicleController } from './vehicles.controller';
import { VehicleService } from './vehicles.service';
import { TranslationService } from 'src/utils/translation.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [VehicleController],
  providers: [VehicleService, TranslationService],
})
export class VehicleModule {}
