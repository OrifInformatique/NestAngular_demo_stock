import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemEntity } from './entites/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get(':page')
  findFiltered(
    @Param('page') page: number,
    @Query('c') c: number[],
    @Query('o') o: string,
    @Query('ad') ad: string,
    @Query('e') e: number,
    @Query('ts') ts?: string,
    @Query('t') t?: number[],
    @Query('s') s?: number[],
    @Query('g') g?: number[],
  ): Promise<{ items: ItemEntity[]; totalItems: number }> {
    return this.itemsService.findFiltered(c, o, ad, e, ts, t, s, g, page);
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<ItemEntity> {
    return this.itemsService.findById(id);
  }
}
