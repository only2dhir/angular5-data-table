import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class MaterialModule { }
