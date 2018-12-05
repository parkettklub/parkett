import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditDance from '../components/EditDance';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import styles from './Page.module.css';

const Edit = () => (

    <div>
        <Header dance />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <EditDance />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Edit;
