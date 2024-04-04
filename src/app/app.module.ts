import { NgModule, isDevMode, InjectionToken } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MarshalsTableModule } from "./components/marshals-table/marshals-table.module";
import { BattleReducer, ListReducer } from "./store/reducers";
import { BattlesEffects, MarshalsEffects } from "./store/effects";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { MarshalsProfileModule } from "./components/marshals-profile/marshals-profile.module";
import { AddNewMarshalComponent } from "./components/add-new-marshal/add-new-marshal.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedMaterialModule } from "./shared/material/shared-material.module";

export interface IAppConfig {
  api_url: string;
}

export const APP_CONFIG = new InjectionToken<IAppConfig>("App_Config");

@NgModule({
  declarations: [AppComponent, HomePageComponent, AddNewMarshalComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MarshalsTableModule,
    MarshalsProfileModule,
    SharedMaterialModule,
    StoreModule.forRoot(
      {
        list: ListReducer,
        battles: BattleReducer,
      },
      {},
    ),
    EffectsModule.forRoot([MarshalsEffects, BattlesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: {
        api_url: "http://127.0.0.1:4441",
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
