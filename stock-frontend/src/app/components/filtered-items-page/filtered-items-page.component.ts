import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemModel } from 'src/app/models/item-model';
import { PaginateItemsModel } from 'src/app/models/paginate-items.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-filtered-items-page',
  templateUrl: './filtered-items-page.component.html',
  styleUrls: ['./filtered-items-page.component.css'],
})
export class FilteredItemsPageComponent implements OnInit {
  items: ItemModel[] = [];
  totalItems: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 48;
  urlFilters: string = '';
  private loadingItems: boolean = false;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.getQueryParam(queryParams);

      this.route.params.subscribe((params) => {
        this.currentPage = +params['pageNumber'] || 1;
        this.loadItems(this.currentPage);
      });
    });
  }

  updateQueryParams(filters: any) {
    this.getQueryParam(filters);
    this.loadItems(this.currentPage, true);
  }

  getQueryParam(queryParams: any) {
    const queryParamTree = this.router.createUrlTree([], {
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });

    this.urlFilters = this.router.serializeUrl(queryParamTree).split('?')[1];
  }

  loadItems(page: number, filtersChanged: boolean = false) {
    if (this.urlFilters === undefined || this.loadingItems) return;

    this.loadingItems = true;

    this.itemService.getFiltered(page, this.urlFilters).subscribe({
      next: (data: PaginateItemsModel) => {
        if (filtersChanged) {
          // Goes back to page 1 on filters changed
          this.router.navigate(['/item', 1], {
            relativeTo: this.route,
            queryParams: this.route.snapshot.queryParams,
          });
        }
        this.items = data.items;
        this.totalItems = data.totalItems;
      },
      complete: () => {
        this.loadingItems = false;
      },
    });
  }

  pageChanged(event: number): void {
    // Update the route parameter when the page changes
    this.router.navigate(['/item', event], {
      relativeTo: this.route,
      queryParams: this.route.snapshot.queryParams
    });
  }
}