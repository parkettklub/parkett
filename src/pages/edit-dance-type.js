import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditDanceType from '../components/EditDanceType';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import styles from './Page.module.css';

const Edit = () => (

    <div>
        <Header dancetype />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <EditDanceType />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Edit;
