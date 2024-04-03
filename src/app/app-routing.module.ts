import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import {MarshalsProfileModule} from "./components/marshals-profile/marshals-profile.module";
import {AddNewMarshalComponent} from "./components/add-new-marshal/add-new-marshal.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'add-new-marshal',
    component: AddNewMarshalComponent
  },
  {
    path: 'table',
    loadChildren: () => import('./components/marshals-table/marshals-table.module').then(m => m.MarshalsTableModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./components/marshals-profile/marshals-profile.module').then(m => m.MarshalsProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
