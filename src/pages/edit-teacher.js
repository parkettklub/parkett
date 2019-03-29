import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditTeacher from '../components/EditTeacher';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import styles from './Page.module.css';

const Edit = () => (

    <div>
        <Header teacher />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <EditTeacher />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Edit;
