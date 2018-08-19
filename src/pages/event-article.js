import React from 'react'
import EventArticle from '../components/EventArticle';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const EventArticlePage = () => (

    <div>
        <Header events />

        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="eventdetails-main">
                <h1 style={{ marginTop: `5rem` }} ></h1>
                <EventArticle />
            </div>
        </ReactCssTransitionGroup>
    </div>
)

export default EventArticlePage