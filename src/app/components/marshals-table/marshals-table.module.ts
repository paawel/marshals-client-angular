import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarshalsTableComponent} from './marshals-table.component';
import {MarshalsRoutingModule} from "./marshals-routing.module";
import {SharedMaterialModule} from "../../shared/material/shared-material.module";


@NgModule({
  declarations: [
    MarshalsTableComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    MarshalsRoutingModule
  ]
})
export class MarshalsTableModule {
}
