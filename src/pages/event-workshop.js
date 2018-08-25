import React from 'react'
import EventWorkshop from '../components/EventWorkshop';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const EventWorkshopPage = () => (

  <div>
    <Header events />
    <ReactCssTransitionGroup
      transitionName="fade"
      transitionAppearTimeout={1000}
      transitionEnterTimeout={300}
      transitionAppear={true}
      transitionLeaveTimeout={300}>
      <div className="pagecenter eventdetails-main">
        <EventWorkshop />
      </div>
    </ReactCssTransitionGroup>
  </div>
)

export default EventWorkshopPage