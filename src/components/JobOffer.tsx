import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IFilteableItems, IOffers } from '../interfaces/StateInterface'
import { addFilter } from '../actions/actions'
import { IAppState } from '../store/configureStore';

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

  const onAddFilter = (item: IFilteableItems) => {
    dispatch(addFilter(item))
  }


  return (
    <section className={jobFeatured(isFeatured)} id={id.toString()}>
      <img className="logo" src={company.logo} alt="company-logo" />
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
        <li>{role.name}</li>
        <li>{level.name}</li>
        {
          languages.map((item) => {
            const language = searchElementById(item, state.languages)
            return (<li key={language.id}>{language.name}</li>)
          })
        }
        {
          tools.map((item) => {
            const tool = searchElementById(item, state.tools)
            return (<li key={tool.id}> {tool.name} </li>)
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


function searchElementById(itemId: number, input: IFilteableItems[]): IFilteableItems {
  const outPut = input.find((item: IFilteableItems) => item.id === itemId)!
  return outPut
}

export default JobOffer;
