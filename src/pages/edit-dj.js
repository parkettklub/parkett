import React from 'react';
import EditDJ from '../components/EditDJ';
import '../components/Card.css';
import HeaderEdit from '../components/HeaderEdit.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Edit = () => (

    <div>
        <HeaderEdit dj />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <EditDJ />
        </ReactCssTransitionGroup>
    </div>
)

export default Edit;