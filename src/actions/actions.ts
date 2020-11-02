import { IAppActions, ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from '../interfaces/ActionInterface';
import { IFilteableItems } from '../interfaces/StateInterface'

export const addFilter = (item: IFilteableItems): IAppActions => ({
  type: ADD_FILTER,
  filterItem: item
})

export const removeFilter = (item: IFilteableItems): IAppActions => ({
  type: REMOVE_FILTER,
  filterItem: item
})

export const clearFilter = (): IAppActions => ({
  type: CLEAR_FILTER,
})
