import { Injectable } from '@nestjs/common';
import { I18nService, TranslateOptions } from 'nestjs-i18n';

@Injectable()
export class TranslationService {
  constructor(private readonly i18n: I18nService) {}

  async translate(
    key: string,
    options: TranslateOptions = { lang: 'es' },
  ): Promise<string> {
    return this.i18n.t(`translation.${key}`, options);
  }

  async arrayTranslation(array: []) {
    return await Promise.all(
      array.map(async (obj: any) => {
        return await this.jsonTranslation(obj);
      }),
    );
  }

  async jsonTranslation(obj: any): Promise<any> {
    const objTranslated = {};
    for (const key in obj) {
      const keyTranslated = await this.translate(key);
      objTranslated[keyTranslated] = obj[key];
    }
    return objTranslated;
  }
}
