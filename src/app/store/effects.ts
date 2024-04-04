import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { ListActions, BattlesActions } from "./actions";
import { HttpService } from "../shared/services/http.service";

@Injectable()
export class MarshalsEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
  ) {}

  loadMarshals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.load),
      exhaustMap(() =>
        this.httpService.getData().pipe(
          map(data => ListActions.listLoadedSuccess({ list: data })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );
}

@Injectable()
export class BattlesEffects {
  constructor(
    private actions$: Actions,
    private httpService: HttpService,
  ) {}

  loadBattles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BattlesActions.load),
      exhaustMap(() =>
        this.httpService.getAllBattles().pipe(
          map(data => BattlesActions.battlesLoadedSuccess({ battles: data })),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );
}
