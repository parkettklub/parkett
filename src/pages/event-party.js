import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EventParty from '../components/EventParty';
import Header from '../components/Header';
import styles from './Page.module.css';

const EventPartyPage = () => (
  <div>
    <Header events />
    <ReactCssTransitionGroup
      transitionName="fade"
      transitionAppearTimeout={1000}
      transitionEnterTimeout={300}
      transitionAppear
      transitionLeaveTimeout={300}
    >
      <div className={styles.main}>
        <EventParty />
      </div>
    </ReactCssTransitionGroup>
  </div>
);

export default EventPartyPage;
