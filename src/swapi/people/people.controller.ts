import { Controller, Get, Param } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get()
  async getAllPeople(): Promise<any> {
    return await this.peopleService.getAllPeople();
  }
  @Get(':id')
  async getPeople(@Param('id') id: string): Promise<any> {
    return await this.peopleService.getPeople(id);
  }
}
