import { Module } from '@nestjs/common';
import { GrupoController } from './grupo.controller';
import { GrupoService } from './grupo.service';
import { DatabaseModule } from '../database/database.module';
import { DataSource } from 'typeorm';
import { GrupoEntity } from './entities/grupo.entity';

const grupoProviders = [
  {
    provide: 'GRUPO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GrupoEntity),
    inject: ['DATA_SOURCE'],
  },
];

@Module({
  controllers: [GrupoController],
  providers: [GrupoService, ...grupoProviders],
  imports: [DatabaseModule]
})
export class GrupoModule { }
