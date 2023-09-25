import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteredItemsPageComponent } from './components/filtered-items-page/filtered-items-page.component';
import { ItemCommonDetailsComponent } from './components/item-common-details/item-common-details.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'item/1' },
    { path: 'item/:pageNumber', component: FilteredItemsPageComponent },
    { path: 'item-common', children: [
        { path: 'view/:itemCommonId', component: ItemCommonDetailsComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
