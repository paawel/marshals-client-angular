import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedMaterialModule} from "../../shared/material/shared-material.module";
import {MarshalsProfileComponent} from "./marshals-profile.component";
import {MarshalsProfileRoutingModule} from "./marshals-profile-routing";


@NgModule({
  declarations: [
    MarshalsProfileComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    MarshalsProfileRoutingModule
  ]
})
export class MarshalsProfileModule {
}
