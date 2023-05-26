import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { I18nModule, QueryResolver, AcceptLanguageResolver } from 'nestjs-i18n';
import * as path from 'path';
import { FilmModule } from './swapi/films/films.module';
import { PeopleModule } from './swapi/people/people.module';
import { PlanetModule } from './swapi/planets/planets.module';
import { SpecieModule } from './swapi/species/species.module';
import { StarshipModule } from './swapi/starships/starships.module';
import { VehicleModule } from './swapi/vehicles/vehicles.module';

@Module({
  imports: [
    ProfileModule,
    FilmModule,
    PeopleModule,
    PlanetModule,
    SpecieModule,
    StarshipModule,
    VehicleModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
  ],
})
export class AppModule {}
