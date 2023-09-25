import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ItemCommonModel } from 'src/app/models/item-common-model';
import { ItemCommonService } from 'src/app/services/item-common.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-item-common-details',
  templateUrl: './item-common-details.component.html',
  styleUrls: ['./item-common-details.component.css'],
})
export class ItemCommonDetailsComponent implements OnInit {
  itemCommonId?: number;
  itemCommon?: ItemCommonModel;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly itemCommonService: ItemCommonService,
    public navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((map: ParamMap) => {
      if (map.has('itemCommonId')) {
        this.itemCommonId = +parseInt(map.get('itemCommonId') || '');

        if (!isNaN(this.itemCommonId)) {
          this.itemCommonService.getById(this.itemCommonId).subscribe({
            next: (data: ItemCommonModel) => {
              this.itemCommon = data;
            },
            error: (error: any) => {
              if (error.status === 404) {
                this.router.navigate(['..'])
              }
            }
          });
        }
      }
    });
  }

  handleMissingImage(event: any) {
    (event.target as HTMLImageElement).src = '/assets/images/no_image.png';
  }
}
