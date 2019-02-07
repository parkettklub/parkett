import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditDanceCourse from '../components/EditDanceCourse';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import styles from './Page.module.css';

const Edit = () => (

    <div>
        <Header danceCourse />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <EditDanceCourse />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Edit;
