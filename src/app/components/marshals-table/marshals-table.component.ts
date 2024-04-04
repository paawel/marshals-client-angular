import { AfterViewInit, Component, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MarshalModel } from "../../models/marshal.model";
import { Router } from "@angular/router";

@Component({
  selector: "component",
  templateUrl: "./marshals-table.component.html",
  styleUrl: "./marshals-table.component.scss",
})
export class MarshalsTableComponent implements AfterViewInit {
  router: Router = inject(Router);
  store = inject(Store);
  displayedColumns: Array<string> = ["surname", "name", "placeOfBirth", "dateOfBirth", "battles"];

  marshals$: Observable<Array<MarshalModel>> = this.store.select("list");

  ngAfterViewInit() {}

  goToProfile(marshal: MarshalModel): void {
    this.router.navigate([`/profile/${marshal.id}`]);
  }

  applyFilter(event: Event) {}
}
