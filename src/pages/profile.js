import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import styles from './Page.module.css';
import Header from '../components/Header';
import ProfileComponent from '../components/ProfileComponent';
import { isLoggedIn } from '../utils/login';
import './Animation.css';


const KnowledgeBase = () => {
    if (isLoggedIn()) {
        return (
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
    }
    return (
        <div className={styles.pageCenter}>
            <div>Nincs Jogosultságod ehhez az oldalhoz. Jelentkezz be!</div>
        </div>
    );
};

export default KnowledgeBase;
