import {NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCommonModule} from "@angular/material/core";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelect, MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [],
  exports: [
    MatCommonModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule
  ]
})
export class SharedMaterialModule {
}
