import React from 'react';

/* Styles */
import '../assets/styles/global.css'

/* Redux */
import { connect } from 'react-redux';

/* Components */
import JobOffer from '../components/JobOffer';
import Filter from '../components/Filter'

export const App = () => (
  <>
    <header />
    <Filter/>
    <JobOffer />
  </>
);
