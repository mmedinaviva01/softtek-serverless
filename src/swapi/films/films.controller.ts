import { Controller, Get, Param } from '@nestjs/common';
import { FilmService } from './films.service';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  async getAllFilm(): Promise<any> {
    return await this.filmService.getAllFilm();
  }
  @Get(':id')
  async getFilm(@Param('id') id: string): Promise<any> {
    return await this.filmService.getFilm(id);
  }
}
