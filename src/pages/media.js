import React from 'react';
import '../components/Card.css';
import Header from '../components/Header.jsx';
import ReactCssTransitionGroup from 'react-addons-css-transition-group';

const Media = () => (

    <div>
        <Header media />
        <ReactCssTransitionGroup
            transitionName="fade"
            transitionAppearTimeout={1000}
            transitionEnterTimeout={300}
            transitionAppear={true}
            transitionLeaveTimeout={300}>
            <div className="pagecenter">
                <h1 style={{ marginTop: `6rem` }} ></h1>
                Média
        </div>
        </ReactCssTransitionGroup>
    </div>
)

export default Media;