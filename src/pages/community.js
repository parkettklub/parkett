import React from 'react';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';
import Members from '../components/Members.jsx';

const Community = () => (
    <div>
        <Header community />

        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="pagecenter">
                <Members />
            </div>
        </ReactCssTransitionGroup>
    </div>
)

export default Community;