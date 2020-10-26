import React from 'react'

import '../assets/styles/components/JobOffer.css'

const JobOffer = () => {
  return(
  <section className="jobOffer--container">
    <img className="logo" src="../assets/images/bg-header-mobile.svg" alt="photosnap"/>
    <div className="top-section--content">
      <p >company</p>
      <span className="new">New!</span>
      <span className="featured">Featured</span>
    </div>
    <div className="offer--container">
      <h2>position at my hause </h2>
      <p>postedAt * contract * location</p>
    </div>
    <ul className="lenaguages">
        <li>languages</li>
        <li>languages</li>
        <li>languages</li>
        <li>languages</li>
    </ul>

  </section>
  )
}

export default JobOffer;
