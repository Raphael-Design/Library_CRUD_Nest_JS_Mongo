import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await mongoose.connect('mongodb://127.0.0.1:27017/biblioteca');
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
