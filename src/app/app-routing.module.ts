import { inject, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AddNewMarshalComponent } from "./components/add-new-marshal/add-new-marshal.component";
import { AuthService } from "./shared/services/auth.service";
import { map } from "rxjs/operators";
import { ROLES } from "./shared/constants/roles";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    resolve: {
      log: () => console.log("Get data before match HOME route"),
    },
    canActivate: [],
  },
  {
    path: "add-new-marshal",
    component: AddNewMarshalComponent,
    canActivate: [() => inject(AuthService).userRole$.pipe(map((el: ROLES) => el === ROLES.ADMIN))],
  },
  {
    // TODO: Component-Less route for combine canactivate rules
    path: "",
    canActivate: [() => inject(AuthService).isAuthenticated$.pipe(map((auth: boolean) => auth))],
    children: [
      {
        path: "table",
        loadChildren: () => import("./components/marshals-table/marshals-table.module").then(m => m.MarshalsTableModule),
      },
      {
        path: "profile/:id",
        loadChildren: () => import("./components/marshals-profile/marshals-profile.module").then(m => m.MarshalsProfileModule),
      },
    ],
  },
  {
    path: "**",
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
