import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultiSelectModel } from 'src/app/models/multi-select.model';
import { MultiSelectService } from 'src/app/services/multi-select.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css'],
})
export class MultiSelectComponent implements OnInit {
  @Output() filtersChanged: EventEmitter<{value: number[], id: string}> = new EventEmitter<{value: number[], id: string}>();
  @Input() id: string = '';
  @Input() options: MultiSelectModel[] = [];
  selectedOptions: number[] = [];

  constructor(private route: ActivatedRoute, private multiSelectService: MultiSelectService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams[this.id]) {
        if (Array.isArray(queryParams[this.id])) {
          this.selectedOptions = queryParams[this.id].map(Number);
        } else if (typeof queryParams[this.id] === 'string') {
          this.selectedOptions = queryParams[this.id].split(',').map(Number);
        } else {
          // Handle other cases or types as needed
          this.selectedOptions = [];
        }
      } else {
        // Query parameter is not present, initialize as an empty array
        this.selectedOptions = [];
      }
    });
  }

  ngOnChanges() {
    this.options = this.options.map((option) => {
      return {
        ...option,
        uniqueId: this.multiSelectService.checkboxCounter++
      }
    })
  }

  toggleSelection(optionId: number, selectId: string): void {
    if (this.selectedOptions.includes(optionId)) {
      this.selectedOptions = this.selectedOptions.filter(
        (selectedOption) => selectedOption !== optionId
      );
    } else {
      this.selectedOptions.push(optionId);
    }
    
    this.filtersChanged.emit({value: this.selectedOptions, id: selectId})
  }

  preventDropdownClose(event: Event): void {
    event.stopPropagation();
  }  
}
