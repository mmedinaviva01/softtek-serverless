import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { TranslationService } from 'src/utils/translation.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class VehicleService {
  constructor(
    private readonly translationService: TranslationService,
    private readonly httpService: HttpService,
  ) {}

  async getAllVehicle(): Promise<any> {
    const data = this.httpService.get('https://swapi.py4e.com/api/vehicles');
    const array = (await lastValueFrom(data)).data.results;
    return await this.translationService.arrayTranslation(array);
  }

  async getVehicle(id: string): Promise<any> {
    const data = this.httpService.get(
      `https://swapi.py4e.com/api/vehicles/${id}`,
    );
    const obj = (await lastValueFrom(data)).data;
    return await this.translationService.jsonTranslation(obj);
  }
}
