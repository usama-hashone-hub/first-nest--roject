import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryInput: CreateCategoryInput) {
    return await this.categoryModel.create(createCategoryInput);
  }

  async findAll() {
    return await this.categoryModel.find().exec();
  }

  async findOne(id) {
    return await this.categoryModel.findById(id).exec();
  }

  async update(id, updateCategoryInput: UpdateCategoryInput) {
    return await this.categoryModel.findByIdAndUpdate(id, updateCategoryInput, {
      new: true,
    });
  }

  async remove(id) {
    return await this.categoryModel.findByIdAndRemove(id);
  }
}
