import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');

  await app.listen(process.env.PORT || 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();