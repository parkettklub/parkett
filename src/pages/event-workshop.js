import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EventWorkshop from '../components/EventWorkshop';
import Header from '../components/Header';
import styles from './Page.module.css';

const EventWorkshopPage = () => (
  <div>
    <Header />
    <ReactCssTransitionGroup
      transitionName="fade"
      transitionAppearTimeout={1000}
      transitionEnterTimeout={300}
      transitionAppear
      transitionLeaveTimeout={300}
    >
      <div className={styles.pageCenter}>
        <EventWorkshop />
      </div>
    </ReactCssTransitionGroup>
  </div>
);

export default EventWorkshopPage;
