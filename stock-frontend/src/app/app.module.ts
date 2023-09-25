import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { LoginBarComponent } from './components/login-bar/login-bar.component';
import { ItemFiltersComponent } from './components/item-filters/item-filters.component';
import { FilteredItemsPageComponent } from './components/filtered-items-page/filtered-items-page.component';
import { ItemCommonDetailsComponent } from './components/item-common-details/item-common-details.component';
import { HttpClientModule } from "@angular/common/http";
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { WarrantyStatusPipe } from './pipes/warranty-status.pipe';
import { ItemConditionPipe } from './pipes/item-condition.pipe';
import { PaginationButtonsComponent } from './components/pagination-buttons/pagination-buttons.component';
import { FormsModule } from '@angular/forms';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { LoanStatusPipe } from './pipes/loan-status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemCardComponent,
    LoginBarComponent,
    ItemFiltersComponent,
    FilteredItemsPageComponent,
    ItemCommonDetailsComponent,
    CustomDatePipe,
    WarrantyStatusPipe,
    ItemConditionPipe,
    PaginationButtonsComponent,
    MultiSelectComponent,
    LoanStatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
