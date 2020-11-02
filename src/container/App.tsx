import React from 'react';

import { useSelector } from 'react-redux';
import { IAppState } from '../store/configureStore';
import { offerInFilter } from '../functions'
import JobOffer from '../components/JobOffer';
import Filter from '../components/Filter';

import '../assets/styles/global.css';

export const App = () => {

  const state = useSelector<IAppState, IAppState["state"]>((item) => item.state);
  const offers = useSelector<IAppState, IAppState["state"]["offers"]>((item) => item.state.offers);
  const filter = useSelector<IAppState, IAppState["state"]["filter"]>((item) => item.state.filter);
  const filterIsEmpty: boolean = filter.length === 0;

  return (
    <>
      {
        (filterIsEmpty) ? (
          <header className="isEmpty" />) : (
            <>
              <header className="isNotEmpty" />
              <Filter />
            </>
          )
      }
      {
        offerInFilter(filter, offers, state).map((item) => {
          return (<JobOffer key={item.id}{...item} />)
        })
      }
    </>
  );
};
