import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";

export const transferId = createAction('[TRANSFER] id', 
props<{id:number}>())
export const transferStyleObj = createAction('[TRANSFER] obj',
props<{obj:Object}>())
export const transferMainStyleObj = createAction('[TRANSFER] mainStyleObj',
props<{mainObjStyle:Object}>())
export const formBuilder = 'formBuilder'
export interface FormBuilderState{
    id:number,
    obj:Object,
    mainObjStyle:Object
}

export const initialState: FormBuilderState ={
    id:2,
    obj:{},
    mainObjStyle:{}
}

export const formBuilderReducer = createReducer(
    
    initialState,
    on(transferId, (state ,{id}) =>{ 
        return {...state, id: id}
        
    }),
    on(transferStyleObj, (state, {obj}) => {
        // console.log(obj)
        return {...state, obj:obj}
    }),
    on(transferMainStyleObj, (state, {mainObjStyle}) => {
        return {...state, mainObjStyle}
    })
)

export const featureSelector = createFeatureSelector<FormBuilderState>('formBuilder');
export const setIdSelector = createSelector(
    featureSelector,
    state => state.id
)
export const setStyleObjSelector = createSelector(
    featureSelector,
    state => state.obj
)
export const setMainStyleObjSelector = createSelector(
    featureSelector,
    state => state.mainObjStyle
)