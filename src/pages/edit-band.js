import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditBand from '../components/EditBand';
import '../components/Card.css';
import HeaderEdit from '../components/HeaderEdit';
import styles from './Page.module.css';

const Edit = () => (

    <div>
        <HeaderEdit band />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <EditBand />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Edit;
