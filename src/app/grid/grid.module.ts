import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    GridHeaderComponent
  ],
  exports: [
    GridComponent,
    GridHeaderComponent
  ]
})
export class GridModule { }
