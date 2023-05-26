import { Module } from '@nestjs/common';
import { PlanetController } from './planets.controller';
import { PlanetService } from './planets.service';
import { TranslationService } from 'src/utils/translation.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PlanetController],
  providers: [PlanetService, TranslationService],
})
export class PlanetModule {}
