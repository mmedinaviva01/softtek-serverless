import { Module } from '@nestjs/common';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';
import { TranslationService } from 'src/utils/translation.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PeopleController],
  providers: [PeopleService, TranslationService],
})
export class PeopleModule {}
