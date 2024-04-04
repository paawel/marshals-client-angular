import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarshalsTableComponent } from "./marshals-table.component";

const routes: Routes = [
  {
    path: "",
    component: MarshalsTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarshalsRoutingModule {}
