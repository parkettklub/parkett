import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditDanceType from '../components/EditDanceType';
import Header from '../components/HeaderEdit';
import styles from './Page.module.css';
import { isLoggedIn } from '../utils/login';
import './Animation.css';

const Edit = () => {
    if (isLoggedIn()) {
        return (
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
    }
    return (
        <div className={styles.pageCenter}>
            <div>Nincs Jogosultságod ehhez az oldalhoz. Jelentkezz be!</div>
        </div>
    );
};

export default Edit;
