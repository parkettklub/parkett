import React from 'react';
import EditEventWorkshop from '../components/EditEventWorkshop.jsx';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const EditWorkshop = () => (

    <div>
        <Header editevents />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="pagecenter">
                <EditEventWorkshop />
            </div>
        </ReactCssTransitionGroup>
    </div>
)

export default EditWorkshop;