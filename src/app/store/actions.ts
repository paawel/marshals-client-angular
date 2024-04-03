import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {MarshalModel} from "../models/marshal.model";
import {BattleModel} from "../models/battle.model";

export const ListActions = createActionGroup({
  source: "List",
  events: {
    Load: emptyProps(),
    "List Loaded Success": props<{ list: MarshalModel[] }>()
  }
});

export const BattlesActions = createActionGroup({
  source: "Battles",
  events: {
    Load: emptyProps(),
    "Battles Loaded Success": props<{ battles: BattleModel[] }>()
  }
});
