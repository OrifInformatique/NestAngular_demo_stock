import { Controller, Get, Param } from '@nestjs/common';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Get(':archived')
  findAll(@Param('archived') archived: string) {
    const isArchived: boolean = archived === '1';
    return this.entitiesService.findAll(isArchived);
  }
}
