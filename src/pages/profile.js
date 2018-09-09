import React from 'react';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import ProfileComponent from '../components/ProfileComponent';


const KnowledgeBase = () => (

    <div>
        <Header profile />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <ProfileComponent />
        </ReactCssTransitionGroup>
    </div>
)

export default KnowledgeBase;