import { Module } from '@nestjs/common';
import { SpecieController } from './species.controller';
import { SpecieService } from './species.service';
import { TranslationService } from 'src/utils/translation.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SpecieController],
  providers: [SpecieService, TranslationService],
})
export class SpecieModule {}
