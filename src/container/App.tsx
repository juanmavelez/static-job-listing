import React from 'react';
import { useSelector, connect } from 'react-redux';
import JobOffer from '../components/JobOffer';
import Filter from '../components/Filter'
import { IState } from '../interfaces/StateInterface';

import '../assets/styles/global.css'

export const App = () => {
  const filter = useSelector<IState, IState["filter"]>((state) => state.filter)
  const offers = useSelector<IState, IState["offers"]>((state) => state.offers)

  return (
  <>
    <header />
    {
      (filter.length > 0 && (<Filter />))
    }
    {offers.map((item) => (
      <JobOffer key={item.id} {...item} />)
    )}

  </>)
}


const mapStateToProps = (state: IState) => {
  return {
    filter: state.filter,
    offers: state.offers
  };
};

export default connect(mapStateToProps, null)(App);
