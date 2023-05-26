import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { TranslationService } from 'src/utils/translation.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SpecieService {
  constructor(
    private readonly translationService: TranslationService,
    private readonly httpService: HttpService,
  ) {}

  async getAllSpecie(): Promise<any> {
    const data = this.httpService.get('https://swapi.py4e.com/api/species');
    const array = (await lastValueFrom(data)).data.results;
    return await this.translationService.arrayTranslation(array);
  }

  async getSpecie(id: string): Promise<any> {
    const data = this.httpService.get(
      `https://swapi.py4e.com/api/species/${id}`,
    );
    const obj = (await lastValueFrom(data)).data;
    return await this.translationService.jsonTranslation(obj);
  }
}
