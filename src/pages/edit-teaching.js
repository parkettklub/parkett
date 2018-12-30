import React from 'react';
import EditTeaching from '../components/EditTeaching';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Edit = () => (

    <div>
        <Header teaching />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <EditTeaching />
        </ReactCssTransitionGroup>
    </div>
)

export default Edit;