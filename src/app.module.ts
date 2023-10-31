import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/helpers/env.helper';
import dbConfig from './common/configs/db.config';
import { GrupoModule } from './modules/grupo/grupo.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs/`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: envFilePath,
      isGlobal: true,
      load: [dbConfig],
    }),
    GrupoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
