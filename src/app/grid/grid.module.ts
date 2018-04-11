import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';

import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
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
