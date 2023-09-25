import { Module } from '@nestjs/common';
import { ItemTagLinksService } from './item-tag-links.service';
import { ItemTagLinksController } from './item-tag-links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemTagLinkEntity } from './entities/item-tag-link.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemTagLinkEntity])
  ],
  controllers: [ItemTagLinksController],
  providers: [ItemTagLinksService],
})
export class ItemTagLinksModule {}
