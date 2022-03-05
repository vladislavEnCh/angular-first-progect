import { authReducer, authState,  auth} from './authReducer';
import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "src/environments/environment";
import { formBuilderReducer, FormBuilderState,formBuilder } from "./formBuilder";
export interface State{
    [formBuilder]:FormBuilderState,
    [auth]:authState
}
export const reducer :ActionReducerMap<State> = {
    [formBuilder]:formBuilderReducer,
    [auth]:authReducer
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];