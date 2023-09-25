import { Module } from '@nestjs/common';
import { ItemTagsService } from './item-tags.service';
import { ItemTagsController } from './item-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTagEntity } from './entities/item-tag.entity';
import { ItemTagLinksModule } from 'src/item-tag-links/item-tag-links.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemTagEntity]),
    ItemTagLinksModule
  ],
  controllers: [ItemTagsController],
  providers: [ItemTagsService],
})
export class ItemTagsModule {}
