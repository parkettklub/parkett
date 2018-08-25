import React from 'react'
import EventParty from '../components/EventParty';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const EventPartyPage = () => (

  <div>
    <Header events />

    <ReactCssTransitionGroup
      transitionName="fade"
      transitionAppearTimeout={1000}
      transitionEnterTimeout={300}
      transitionAppear={true}
      transitionLeaveTimeout={300}>
      <div className="pagecenter eventdetails-main">
        <EventParty />
      </div>
    </ReactCssTransitionGroup>
  </div>
)

export default EventPartyPage