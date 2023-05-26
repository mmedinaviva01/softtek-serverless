import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { TranslationService } from 'src/utils/translation.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FilmService {
  constructor(
    private readonly translationService: TranslationService,
    private readonly httpService: HttpService,
  ) {}

  async getAllFilm(): Promise<any> {
    const data = this.httpService.get('https://swapi.py4e.com/api/films');
    const array = (await lastValueFrom(data)).data.results;
    return await this.translationService.arrayTranslation(array);
  }

  async getFilm(id: string): Promise<any> {
    const data = this.httpService.get(`https://swapi.py4e.com/api/films/${id}`);
    const obj = (await lastValueFrom(data)).data;
    return await this.translationService.jsonTranslation(obj);
  }
}
