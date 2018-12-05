import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditTeaching from '../components/EditTeaching';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import styles from './Page.module.css';

const Edit = () => (

    <div>
        <Header teaching />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <EditTeaching />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Edit;
