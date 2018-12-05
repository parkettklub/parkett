import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditEventList from '../components/EditEventList';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import styles from './Page.module.css';

const Edit = () => (

    <div>
        <Header event />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <EditEventList />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Edit;
