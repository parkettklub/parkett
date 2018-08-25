import React from 'react'
import EventList from '../components/EventList';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const EventsPage = () => (

  <div>
    <Header events />
    <ReactCssTransitionGroup
      transitionName="fade"
      transitionAppearTimeout={1000}
      transitionEnterTimeout={300}
      transitionAppear={true}
      transitionLeaveTimeout={300}>
      <div className="pagecenter">
        <EventList />
      </div>
    </ReactCssTransitionGroup>
  </div>
)

export default EventsPage;