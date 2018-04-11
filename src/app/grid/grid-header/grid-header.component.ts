import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-grid-header]',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent implements OnInit {
  @Input() headerConfig: any[] = [];
  @Input() sortConfig: any;
  @Output() onSortChanged = new EventEmitter<{key: string, direction: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  changeSort(labelObject) {
    if (!labelObject.sortable) return;
    
    if (this.sortConfig.key === labelObject.key) {
      this.sortConfig.direction = !this.sortConfig.direction;
    } else {
       this.sortConfig = {
        key: labelObject.key,
        direction: true
      }
    }

    this.onSortChanged.emit(this.sortConfig);
  }

}
