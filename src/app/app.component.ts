import { Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { ListActions } from "./store/actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  store = inject(Store);

  constructor() {
    this.store.dispatch(ListActions.load());
  }
}
