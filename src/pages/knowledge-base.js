import React from 'react';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Header from '../components/Header-Footer/Header';
import KnowledgeBaseComponent from '../components/KnowledgePage/KnowledgeBaseComponent';
import styles from './Page.module.css';

const KnowledgeBase = () => (

    <div>
        <Header knowledgebase />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear
            transitionLeaveTimeout={300}
        >
            <div className={styles.main}>
                <KnowledgeBaseComponent />
            </div>
        </ReactCssTransitionGroup>
    </div>
);

export default KnowledgeBase;
