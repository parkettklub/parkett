import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import styles from './Page.module.css';
import Header from '../components/Header';
import ProfileComponent from '../components/ProfileComponent';


const KnowledgeBase = () => (

    <div>
        <Header profile />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.pageCenter}>
                <ProfileComponent />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default KnowledgeBase;
