import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import EditMember from '../components/EditMember';
import HeaderEdit from '../components/HeaderEdit';
import styles from './Page.module.css';
import { isLoggedIn } from '../utils/login';
import './Animation.css';

const Edit = () => {
    if (isLoggedIn()) {
        return (
            <div>
                <HeaderEdit member />
                <ReactCssTransitionGroup
                    transitionName="fade"
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={300}
                    transitionAppear
                    transitionLeaveTimeout={300}
                >
                    <div className={styles.main}>
                        <EditMember />
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
