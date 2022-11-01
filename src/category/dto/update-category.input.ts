import { CreateCategoryInput } from './create-category.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field()
  id: String;

  @Field(() => String, { description: 'name of category' })
  name?: string;

  @Field(() => String, { description: 'desc of category' })
  description?: string;

  @Field(() => Boolean, { description: 'status of category' })
  isActive?: boolean;
}
