import React from 'react';
import Header from '../components/Header-Footer/Header';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import CommunityComponent from '../components/CommunityPage/CommunityComponent';
import styles from './Page.module.css';

const Community = () => (
    <div>
        <Header community />

        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className={styles.main}>
                <CommunityComponent />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Community;
