import React from 'react';
import EditEventList from '../components/EditEventList';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Editevents = () => (

    <div>
        <Header editevents />
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

export default Editevents;