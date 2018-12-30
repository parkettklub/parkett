import React from 'react';
import EditTeacher from '../components/EditTeacher';
import '../components/Card.css';
import Header from '../components/HeaderEdit';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Edit = () => (

    <div>
        <Header teacher />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <EditTeacher />
        </ReactCssTransitionGroup>
    </div>
)

export default Edit;