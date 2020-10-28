import React from 'react'

import '../assets/styles/components/Filter.css'
const Filter = () => {
  return (
    <>
      <div className="filter--container">
        <ul className="filter-elements--list">
          <li>
            <p>JavaScript</p>
            <button></button>
          </li>
          <li>
            <p>CSS</p>
            <button></button>
          </li>
          <li>
            <p>Front-End</p>
            <button></button>
          </li>
        </ul>
        <button className="filter--button">Clear</button>
      </div>
    </>
  )
}

export default Filter;
