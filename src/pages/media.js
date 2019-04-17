import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Header from '../components/Header-Footer/Header';
import styles from './Page.module.css';
import MediaComponent from '../components/MediaPage/MediaComponent';

const Media = () => (

    <div>
        <Header media />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <MediaComponent />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default Media;
