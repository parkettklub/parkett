import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EventArticle from '../components/Events/EventArticle';
import Header from '../components/Header';
import styles from './Page.module.css';

const EventArticlePage = () => (
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
                <EventArticle />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default EventArticlePage;
