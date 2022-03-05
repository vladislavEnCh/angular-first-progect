import { IElementStyle } from './../types/interface/app.interface';
import { IGlobalStyle } from './../page/main-page/interfaces/interfaces';
import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export enum actionTypesForm {
  TRANSFER_ID = '[TRANSFER] id',
  TRANSFER_OBJ = '[TRANSFER] obj',
  TRANSFER_MAIN_STYLE_OBJ = '[TRANSFER] mainStyleObj',
}

export const transferId = createAction(
  actionTypesForm.TRANSFER_ID,
  props<{ id: number }>()
);

export const transferStyleObj = createAction(
  actionTypesForm.TRANSFER_OBJ,
  props<{ elementStyle: IElementStyle }>()
);

export const transferMainStyleObj = createAction(
  actionTypesForm.TRANSFER_MAIN_STYLE_OBJ,
  props<{ globalStyle: IGlobalStyle }>()
);

export const formBuilder = 'formBuilder';
export interface FormBuilderState {
  id: number;
  elementStyle: IElementStyle;
  globalStyle: IGlobalStyle;
}

export const initialState: FormBuilderState = {
  id: 0,
  elementStyle: {},
  globalStyle: {},
};

export const formBuilderReducer = createReducer(
  initialState,
  on(transferId, (state, { id }) => {
    return { ...state, id: id };
  }),
  on(transferStyleObj, (state, { elementStyle }) => {
    return { ...state, elementStyle: elementStyle };
  }),
  on(transferMainStyleObj, (state, { globalStyle }) => {
    return { ...state, globalStyle };
  })
);

export const featureSelector =
  createFeatureSelector<FormBuilderState>('formBuilder');
export const setIdSelector = createSelector(
  featureSelector,
  (state) => state.id
);
export const setStyleObjSelector = createSelector(
  featureSelector,
  (state) => state.elementStyle
);
export const setMainStyleObjSelector = createSelector(
  featureSelector,
  (state) => state.globalStyle
);
