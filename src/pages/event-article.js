import React from 'react'
import EventArticle from '../components/EventArticle';
import Header from '../components/Header.jsx';

const EventArticlePage = () => (

    <div>
        <Header events />
        <div className="eventdetails-main">
            <h1 style={{ marginTop: `5rem` }} ></h1>
            <EventArticle />
        </div>
    </div>
)

export default EventArticlePage