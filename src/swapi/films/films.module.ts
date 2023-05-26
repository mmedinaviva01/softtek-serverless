import { Module } from '@nestjs/common';
import { FilmController } from './films.controller';
import { FilmService } from './films.service';
import { TranslationService } from 'src/utils/translation.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FilmController],
  providers: [FilmService, TranslationService],
})
export class FilmModule {}
