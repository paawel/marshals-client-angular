import {MarshalModel} from "../models/marshal.model";
import {createReducer, on} from "@ngrx/store";
import {BattlesActions, ListActions} from "./actions";
import {BattleModel} from "../models/battle.model";

export const initialMarshalsState: ReadonlyArray<MarshalModel> = [];
export const initialBattlesState: ReadonlyArray<BattleModel> = [];

export const ListReducer = createReducer(
  initialMarshalsState,
  on(ListActions.listLoadedSuccess, (state, { list }) => list)
);

export const BattleReducer = createReducer(
  initialBattlesState,
  on(BattlesActions.battlesLoadedSuccess, (state, { battles }) => battles)
);
