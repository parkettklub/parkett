import React from 'react';
import EditDance from '../components/EditDance';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Edit = () => (

    <div>
        <Header dance />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <EditDance />
        </ReactCssTransitionGroup>
    </div>
)

export default Edit;