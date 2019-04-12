import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EventList from '../components/Events/EventList';
import Header from '../components/Header-Footer/Header';
import styles from './Page.module.css';

const EventsPage = () => (

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
        <EventList />
      </div>
    </ReactCssTransitionGroup>
  </div>
);

export default EventsPage;
