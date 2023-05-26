import { Module } from '@nestjs/common';
import { StarShipController } from './starships.controller';
import { StarShipService } from './starships.service';
import { TranslationService } from 'src/utils/translation.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [StarShipController],
  providers: [StarShipService, TranslationService],
})
export class StarshipModule {}
