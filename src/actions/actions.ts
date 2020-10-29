import { AppActions, ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from '../interfaces/ActionInterface';
import { FilteableItems } from '../interfaces/StateInterface'

export const addFilter = (item: FilteableItems ): AppActions => ({
  type: ADD_FILTER,
  filterItem: item
})

export const removeFilter = (item: FilteableItems ): AppActions => ({
  type: REMOVE_FILTER,
  filterItem: item
})

export const clearFilter = (): AppActions => ({
  type: CLEAR_FILTER,
})
