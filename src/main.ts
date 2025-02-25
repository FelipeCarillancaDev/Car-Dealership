import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //true -> elimina los campos que no estan en el dto
      forbidNonWhitelisted: true, // true -> devuelve un error si los campos no estan en el dto
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}

main();
