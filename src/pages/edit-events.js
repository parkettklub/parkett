import React from 'react';
import EditEventList from '../components/EditEventList';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Edit = () => (

    <div>
        <Header event />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <EditEventList />
        </ReactCssTransitionGroup>
    </div>
)

export default Edit;