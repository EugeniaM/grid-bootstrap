import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() strippedTable = true;
  @Input() headerConfig: any[] = [];
  @Input() sortConfig: any;
  @Output() onSortChanged = new EventEmitter<{key: string, direction: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  changeSort(event: { key: string, direction: boolean }) {
    this.onSortChanged.emit(event);
  }

}
