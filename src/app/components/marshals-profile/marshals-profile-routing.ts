import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MarshalsProfileComponent} from "./marshals-profile.component";

const routes: Routes = [
  {
    path: '',
    component: MarshalsProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MarshalsProfileRoutingModule {
}
