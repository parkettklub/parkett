import React from 'react';
import EditBand from '../components/EditBand';
import '../components/Card.css';
import HeaderEdit from '../components/HeaderEdit';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Edit = () => (

    <div>
        <HeaderEdit band />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <EditBand />
        </ReactCssTransitionGroup>
    </div>
)

export default Edit;