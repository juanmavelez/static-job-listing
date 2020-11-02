import React from 'react'

import { useSelector } from 'react-redux';
import { IAppState } from '../store/configureStore';

import '../assets/styles/components/Filter.css'

const Filter = () => {

  const filter = useSelector<IAppState, IAppState["state"]["filter"]>((item) => item.state.filter);

  return (
    <>
      <div className="filter--container">
        <ul className="filter-elements--list">
          {
            filter.map((item) => {
              return (
                <li key={item.name}>
                  <p>{item.name}</p>
                  <button></button>
                </li>
              )
            })
          }

        </ul>
        <button className="filter--button">Clear</button>
      </div>
    </>
  )
}

export default Filter;
