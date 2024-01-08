import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');

  await app
    .listen(port)
    .then(() => {
      console.log(`Successfully started on port ${port}`);
    })
    .catch((err) => {
      console.error(err);
    });
}

bootstrap();
