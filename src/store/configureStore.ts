import { createStore, combineReducers} from 'redux';
import { reducer } from '../reducers/reducer'

export const rootReducer = combineReducers({
  state: reducer
});

export type AppState = ReturnType <typeof rootReducer>

export const store = createStore(rootReducer)
