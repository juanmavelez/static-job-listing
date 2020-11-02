import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../store/configureStore';
import { removeFilter, clearFilter } from '../actions/actions'
import { IFilteableItems } from '../interfaces/StateInterface'
import '../assets/styles/components/Filter.css'

const Filter = () => {

  const filter = useSelector<IAppState, IAppState["state"]["filter"]>((item) => item.state.filter);
  const dispatch = useDispatch();

  const onRemoveFilter = (item: IFilteableItems) => {
    dispatch(removeFilter(item))
  }
  const onClearFilter = () => {
    dispatch(clearFilter())
  }

  return (
    <>
      <div className="filter--container">
        <ul className="filter-elements--list">
          {
            filter.map((item) => {
              return (
                <li key={item.name}>
                  <p>{item.name}</p>
                  <button onClick={() => onRemoveFilter(item)}></button>
                </li>)
            })
          }
        </ul>
        <button className="filter--button" onClick={() => onClearFilter()}>Clear</button>
      </div>
    </>
  )
}

export default Filter;
