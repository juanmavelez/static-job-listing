import { IState } from '../interfaces/StateInterface';
import { AppActions } from '../interfaces/ActionInterface';
import { initialState } from './initialState';

const reducerDefaultState: IState = initialState;

export const reducer = (state = reducerDefaultState, action: AppActions): IState => {
  switch (action.type) {
    case 'ADD_FILTER':
      return {
        ...state,
        filter: [...state.filter, action.filterItem],
      };
    case 'REMOVE_FILTER':
      return {
        ...state,
        filter: state.filter.filter((items) => items !== action.filterItem),
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        filter: [],
      };
    default:
      return state;
  }
};
