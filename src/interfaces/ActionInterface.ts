import { IFilteableItems } from './StateInterface'


export const ADD_FILTER = "ADD_FILTER"
export const REMOVE_FILTER = "REMOVE_FILTER"
export const CLEAR_FILTER = "CLEAR_FILTER"

export interface IAddfilterAction {
  type: typeof ADD_FILTER
  filterItem: IFilteableItems
}

export interface IRemoveFilterAction{
  type: typeof REMOVE_FILTER
  filterItem: IFilteableItems
}

export interface IClearFilterAction{
  type: typeof CLEAR_FILTER
}

export type IAppActions = IAddfilterAction | IRemoveFilterAction | IClearFilterAction;
