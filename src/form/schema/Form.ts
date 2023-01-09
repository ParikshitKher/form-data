import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  mobile: number;

  @Prop()
  profileImg: string;

  @Prop()
  address: string;

  @Prop()
  country: string;

  @Prop()
  state: string;

  @Prop()
  city: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
