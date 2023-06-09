import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
main().catch((e) => {
  return e.message;
});
