import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "src/environments/environment";
import { formBuilderReducer, FormBuilderState,formBuilder } from "./formBuilder";
export interface State{
    [formBuilder]:FormBuilderState
}
export const reducer :ActionReducerMap<State> = {
    [formBuilder]:formBuilderReducer,
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];