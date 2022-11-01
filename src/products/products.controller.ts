import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateParams, UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}
  @ApiBearerAuth()
  @Post()
  async createProduct(@Res() response, @Body() product: CreateProductDto) {
    const newProduct = await this.productService.create(product);
    return response.status(HttpStatus.CREATED).json({
      newProduct,
    });
  }
  @ApiBearerAuth()
  @Get()
  async fetchAll(@Res() response) {
    const products = await this.productService.findAll();
    return response.status(HttpStatus.OK).json({
      products,
    });
  }
  @ApiBearerAuth()
  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const product = await this.productService.findOne(id);
    return response.status(HttpStatus.OK).json({
      product,
    });
  }

  @Put('/:id')
  async update(
    @Res() response,
    @Param() params: UpdateParams,
    @Body() product: UpdateProductDto,
  ) {
    const updatedProduct = await this.productService.update(params.id, product);
    return response.status(HttpStatus.OK).json({
      updatedProduct,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    const deletedProduct = await this.productService.remove(id);
    return response.status(HttpStatus.OK).json({
      deletedProduct,
    });
  }
}
