import React from 'react'
import Header from '../components/Header.jsx';
import EditKnowledgeMain from '../components/EditKnowledgeMain.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const EventKnowledgeBase = () => (

    <div>
        <Header editknowledgebase />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="pagecenter">
                <h1 style={{ marginTop: `5rem` }} ></h1>
                <EditKnowledgeMain />
            </div>
        </ReactCssTransitionGroup>
    </div>
)

export default EventKnowledgeBase