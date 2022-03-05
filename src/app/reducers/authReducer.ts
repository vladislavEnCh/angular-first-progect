import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export enum actionTypesAuth {
  SET_FLAG = '[SET] flag',
}

export const setAuth = createAction(
  actionTypesAuth.SET_FLAG,
  props<{ auth: boolean }>()
);

export const auth = 'auth';

export interface authState {
  auth: boolean;
}
export const initialState: authState = {
  auth: false,
};

export const authReducer = createReducer(
  initialState,
  on(setAuth, (state, { auth }) => {
    return { ...state, auth: auth };
  })
);

export const featureSelector = createFeatureSelector<authState>('auth');
export const setAuthSelector = createSelector(
  featureSelector,
  (state) => state.auth
);
