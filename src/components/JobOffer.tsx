import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IFilteableItems, IOffers } from '../interfaces/StateInterface'
import { addFilter } from '../actions/actions'
import { IAppState } from '../store/configureStore';
import { searchElementById } from '../functions/index';

import '../assets/styles/components/JobOffer.css'

const JobOffer = (props: IOffers) => {

  const state = useSelector<IAppState, IAppState["state"]>((item) => item.state);
  const dispatch = useDispatch();

  const { id, languages, tools, position, isNew, isFeatured, postedAt } = props

  const company = searchElementById(props.company, state.companies);
  const role = searchElementById(props.role, state.roles);
  const level = searchElementById(props.level, state.levels);
  const location = searchElementById(props.location, state.locations);
  const contract = searchElementById(props.contract, state.contracts);

  const icon = new Image()
  icon.src = company.logo!

  const onAddFilter = (item: IFilteableItems) => {
    dispatch(addFilter(item))
  }

  return (
    <section className={jobFeatured(isFeatured)} id={id.toString()}>
      <img className="logo" src={icon.src} alt="company-logo" />
      <div className="top-section--content">
        <p>{company.name}</p>
        {
          isNew && <span className="new">New!</span>
        }
        {
          isFeatured && <span className="featured">Featured</span>
        }
      </div>
      <div className="offer--container">
        <h2>  {position}  </h2>
        <p> {postedAt} * {contract.name} * {location.name}  </p>
      </div>
      <ul className="lenaguages">
        <li onClick={() => { onAddFilter(role) }}> {role.name}</li>
        <li onClick={() => { onAddFilter(level) }}>{level.name}</li>
        {
          languages.map((item) => {
            const language = searchElementById(item, state.languages)
            return (<li key={language.id} onClick={() => onAddFilter(language)}>{language.name}</li>)
          })
        }
        {
          tools.map((item) => {
            const tool = searchElementById(item, state.tools)
            return (<li key={tool.id} onClick={() => onAddFilter(tool)}> {tool.name} </li>)
          })
        }
      </ul>
    </section>
  )
}

function jobFeatured(isFeatured: boolean): string {
  if (isFeatured) {
    return ("jobOffer--container-featured")
  } else {
    return ("jobOffer--container")
  }
}

export default JobOffer;
