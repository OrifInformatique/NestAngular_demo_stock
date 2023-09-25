import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';
import { ItemCommonsModule } from './item-commons/item-commons.module';
import { ItemGroupsModule } from './item-groups/item-groups.module';
import { EntitiesModule } from './entities/entities.module';
import { ItemConditionsModule } from './item-conditions/item-conditions.module';
import { StockingPlacesModule } from './stocking-places/stocking-places.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ItemTagsModule } from './item-tags/item-tags.module';
import { ItemTagLinksModule } from './item-tag-links/item-tag-links.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/**/entities/*.entity{.ts}'],
      synchronize: false,
      autoLoadEntities: true
    }),
    ItemsModule,
    ItemCommonsModule,
    ItemGroupsModule,
    EntitiesModule,
    ItemConditionsModule,
    StockingPlacesModule,
    SuppliersModule,
    ItemTagsModule,
    ItemTagLinksModule,
    LoansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
