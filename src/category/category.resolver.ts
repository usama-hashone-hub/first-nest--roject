import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Category } from './category.schema';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello world';
  }

  @Mutation(() => Category)
  async createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return await this.categoryService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: 'category' })
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  async findOne(@Args('id', { type: () => String }) id: String) {
    return await this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return await this.categoryService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => Category)
  async removeCategory(@Args('id', { type: () => String }) id: String) {
    return await this.categoryService.remove(id);
  }
}
