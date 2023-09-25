import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityModel } from 'src/app/models/entity-model';
import { ItemGroupModel } from 'src/app/models/item-group-model';
import { ItemTagModel } from 'src/app/models/item-tag-model';
import { MultiSelectModel } from 'src/app/models/multi-select.model';
import { EntitiesService } from 'src/app/services/entities.service';
import { ItemGroupsService } from 'src/app/services/item-groups.service';
import { ItemTagsService } from 'src/app/services/item-tags.service';
import { MultiSelectService } from 'src/app/services/multi-select.service';
import { StockingPlacesService } from 'src/app/services/stocking-places.service';

@Component({
  selector: 'app-item-filters',
  templateUrl: './item-filters.component.html',
  styleUrls: ['./item-filters.component.css'],
})
export class ItemFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<any>();
  entities: MultiSelectModel[] = [];
  orderByFields: MultiSelectModel[] = [
    { id: 0, name: 'Nom' },
    { id: 1, name: 'Lieu de stockage' },
    { id: 2, name: 'Date d\'achat' },
    { id: 3, name: 'No d\'inventaire' },
  ];
  orders: MultiSelectModel[] = [
    { id: 0, name: 'Ascendant' },
    { id: 1, name: 'Descendant' },
  ];
  itemConditions: MultiSelectModel[] = [
    { id: 10, name: 'Fonctionnel', uniqueId: this.multiSelectService.checkboxCounter++ },
    { id: 30, name: 'À réparer', uniqueId: this.multiSelectService.checkboxCounter++ },
    { id: 40, name: 'Plus disponible', uniqueId: this.multiSelectService.checkboxCounter++ },
  ];
  itemTags: MultiSelectModel[] = [];
  itemGroups: MultiSelectModel[] = [];
  stockingPlaces: MultiSelectModel[] = [];
  selectedOrderBy?: number;
  selectedAscDesc?: number;
  selectedEntity?: number;
  textSearchValue: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemTagsService: ItemTagsService,
    private itemGroupsService: ItemGroupsService,
    private stockingPlacesService: StockingPlacesService,
    private multiSelectService: MultiSelectService,
    private entitiesService: EntitiesService
  ) {}

  ngOnInit(): void {
    this.entitiesService.getAll(false)
      .subscribe({
        next: (data: EntityModel[]) => {
          this.entities = data.map((obj) => {
            return {
              id: obj.entity_id,
              name: obj.name
            }
          });
        }
      });

    let entityId = 1;
    this.route.queryParams.subscribe((queryParams: any) => {
      if (Object.keys(queryParams).length === 0) {
        const queryParams = {
          'c[]': [10],
          o: 0,
          ad: 0,
          e: entityId,
        };

        this.router.navigate([], {
          relativeTo: this.route,
          queryParams,
        });

        this.filtersChanged.emit(queryParams);
      }

      this.route.queryParams.subscribe(params => {
        // Set the selected value for 'o' (order by)
        const o = +params['o'];
        this.selectedOrderBy = o !== undefined ? o : 0;
    
        // Set the selected value for 'ad' (asc or desc)
        const ad = +params['ad'];
        this.selectedAscDesc = ad !== undefined ? ad : 0;
    
        // Set the selected value for 'e' (entity)
        const e = +params['e'];
        this.selectedEntity = e !== undefined ? e : 0;
        
        // Set the selected value for 'ts' (text search)
        const ts = params['ts'];
        this.textSearchValue = ts !== undefined ? ts : '';
      });

      this.itemTagsService.getAll()
        .subscribe({
          next: (data: ItemTagModel[]) => {
            this.itemTags = data.map((obj) => {
              return {
                id: obj.item_tag_id,
                name: obj.name
              }
            });
          }
        });
    });

    this.getItemGroupsByEntity(entityId);
    this.getStockingPlacesByEntity(entityId);
  }

  onSelectChange(event: any, selectId: string) {
    const selectedValue = event.target.value;
    this.updateQueryParam(selectId, selectedValue);
  }

  onMultiSelectChange(event: any) {
    const selectedValue = event.value;
    const selectedId = event.id;
    this.updateQueryParam(selectedId, selectedValue);
  }

  // Function to update query parameters in the URL.
  private updateQueryParam(paramName: string, paramValue: any) {
    if (paramName === 'e') {
      this.getItemGroupsByEntity(paramValue);
      this.getStockingPlacesByEntity(paramValue);
    }
    const queryParams: any = { ...this.route.snapshot.queryParams };
    queryParams[paramName] = paramValue;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });

    this.filtersChanged.emit(queryParams);
  }

  getStockingPlacesByEntity(entityId: number) {
    this.stockingPlacesService.getByEntityId(entityId)
      .subscribe({
        next: (data) => {
          this.stockingPlaces = data.map((obj) => {
            return {
              id: obj.stocking_place_id,
              name: obj.name
            }
          });
        }
      });
  }

  getItemGroupsByEntity(entityId: number) {
    this.itemGroupsService.getByEntityId(entityId)
      .subscribe({
        next: (data: ItemGroupModel[]) => {
          this.itemGroups = data.map((obj) => {
            return {
              id: obj.item_group_id,
              name: obj.name
            }
          });
        }
      });
  }
}
