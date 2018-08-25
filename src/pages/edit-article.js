import React from 'react';
import EditEventArticle from '../components/EditEventArticle.jsx';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const EditArticle = () => (

    <div>
        <Header editevents />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="pagecenter">
                <EditEventArticle />
            </div>
        </ReactCssTransitionGroup>
    </div>
)

export default EditArticle;