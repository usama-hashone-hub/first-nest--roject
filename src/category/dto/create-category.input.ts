import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field(() => String, { description: 'name of category' })
  name: string;

  @Field(() => String, { description: 'desc of category' })
  description: string;

  @Field(() => Boolean, { description: 'status of category' })
  isActive?: boolean;
}
