import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Form, FormDocument } from './schema/Form';
import { Model } from 'mongoose';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private formModel: Model<FormDocument>) {}

  create(createFormDto: CreateFormDto): Promise<Form> {
    const createdForm = new this.formModel(createFormDto);
    return createdForm.save();
  }

  findAll(): Promise<Form[]> {
    return this.formModel.find().exec();
  }

  findOne(id: string): Promise<Form> {
    return this.formModel.findById(id).exec();
  }

  update(id: string, updateFormDto: UpdateFormDto): Promise<any> {
    return this.formModel.updateOne({ _id: id }, updateFormDto).exec();
  }

  remove(id: string): Promise<any> {
    return this.formModel.deleteOne({ _id: id }).exec();
  }
}
