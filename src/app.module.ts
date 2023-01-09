import { Module } from '@nestjs/common';
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    FormModule,
    MongooseModule.forRoot('mongodb://localhost:27017/formData'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
